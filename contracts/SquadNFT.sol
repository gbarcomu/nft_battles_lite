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
        pendingWithdrawal = 0;
    }

    uint256 private mintPrice = 5 ether;
    uint32 private tokenCounter;
    uint256 public pendingWithdrawal;
    mapping(uint32 => bytes4) tokenToSquad;

    event PlayerSquadComposition(bytes4);

    function registerSquad()
        public
        payable
    {
        if (msg.sender != owner()) {
            require(msg.value == mintPrice, "Error: Price not enough");
            pendingWithdrawal += msg.value;
        }

        _safeMint(msg.sender, tokenCounter);
        tokenToSquad[tokenCounter] = getPseudoRandomSquad();
        emit PlayerSquadComposition(tokenToSquad[tokenCounter]);
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

    function withdraw() public onlyOwner {
        uint256 amount = pendingWithdrawal;
        pendingWithdrawal = 0;
        payable(msg.sender).transfer(amount);
    }

    modifier registeredSquad(address player) {
        require(balanceOf(player) > 0, "Error: register a squad first");
        _;
    }
}
