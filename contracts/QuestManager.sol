// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./QuestExecution.sol";
import "./SquadNFT.sol";
import "./PseudoRandomSquadGenerator.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./LootTokens.sol";

contract QuestManager is QuestExecution, Ownable, PseudoRandomSquadGenerator {

    SquadNFT squadNFT;

    uint256 private mealPrice = 3 ether;
    uint256 private battleFatigue = 2 minutes;
    uint256 public pendingWithdrawal;

    uint256 private losePrize = 20;
    uint256 private winPrize = 80;

    mapping(address => uint256) questPlayedTimestamp;

    event IsPlayerWinner(bool);
    event PlayerSquadComposition(bytes4);
    event EnemySquadComposition(bytes4);

    constructor(address squadNFTAddress) {
        squadNFT = SquadNFT(squadNFTAddress);
        pendingWithdrawal = 0;
    }

    function playQuest(address lootTokenAddress)
        public
        noBattleFatigue
    {
        bytes4 playerSquad = squadNFT.getSquadComposition(msg.sender);
        bytes4 enemySquad = getPseudoRandomSquad();
        emit PlayerSquadComposition(playerSquad);
        emit EnemySquadComposition(enemySquad);

        bool playerWins = executeQuest(playerSquad, enemySquad);
        emit IsPlayerWinner(playerWins);
        LootTokens(lootTokenAddress).mintTokens(msg.sender, playerWins == true ? winPrize : losePrize);
        questPlayedTimestamp[msg.sender] = block.timestamp;
    }

    function getRemainingTime(address playerAddress) public view returns (uint256) {
        if (questPlayedTimestamp[playerAddress] == 0 ||
            questPlayedTimestamp[playerAddress] + battleFatigue < block.timestamp) {
            return 0;
        }
        else {
            return questPlayedTimestamp[playerAddress] + battleFatigue - block.timestamp;
        }
    }

    function removeBattleFatigue()
        public
        payable
    {
        if (msg.sender != owner()) {
            require(msg.value == mealPrice, "Error: Price not enough");
            pendingWithdrawal += msg.value;
        }
        questPlayedTimestamp[msg.sender] = 0;
    }

    function withdraw() public onlyOwner {
        uint256 amount = pendingWithdrawal;
        pendingWithdrawal = 0;
        payable(msg.sender).transfer(amount);
    }
    
    modifier noBattleFatigue() {
        require(getRemainingTime(msg.sender) == 0, "Error: Squad need to rest");
        _;
    }
}
