// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LootToken is ERC20 {
    address public QuestManagerAddress;

    constructor(address questManagerAddress) ERC20("LootToken", "LTK") {
        QuestManagerAddress = questManagerAddress;
    }

    function mintTokens(address target, uint256 amount)
        public
        onlyQuestManager
    {
        _mint(target, amount);
    }

    function decimals() public pure override returns (uint8) {
        return 0;
    }

    modifier onlyQuestManager() {
        require(
            QuestManagerAddress == msg.sender,
            "Error: only QuestManager can call this function"
        );
        _;
    }
}
