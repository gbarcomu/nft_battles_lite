// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./PseudoRandomSquadGenerator.sol";

contract SquadNFT is ERC721Enumerable, Ownable, PseudoRandomSquadGenerator {
    constructor() ERC721("SquadNFT", "SQD") {
        tokenCounter = 0;
    }

    uint256 private mintPrice = 5 ether;

    uint32 private tokenCounter;
    mapping(uint32 => bytes4) tokenToSquad;

    function registerSquad()
        public
        payable
    {
        if (msg.sender != owner()) {
            require(msg.value == mintPrice, "Error: Price not enough");
            payable(owner()).transfer(mintPrice);
        }

        _safeMint(msg.sender, tokenCounter);
        tokenToSquad[tokenCounter] = getPseudoRandomSquad();
        tokenCounter++;
    }

    function getSquadComposition(address player)
        public
        view
        registeredSquad(player)
        returns (bytes4)
    {
        return tokenToSquad[uint32(tokenOfOwnerByIndex(player, 0))];
    }

    modifier registeredSquad(address player) {
        require(balanceOf(player) > 0, "Error: register a squad first");
        _;
    }
}
