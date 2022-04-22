// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./QuestExecution.sol";
import "./SquadNFT.sol";
import "./PseudoRandomSquadGenerator.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract QuestManager is QuestExecution, Ownable, PseudoRandomSquadGenerator {

    SquadNFT squadNFT;

    uint256 private mealPrice = 3 ether;
    uint256 private battleFatigue = 2 minutes;

    mapping(address => uint256) questPlayedTimestamp;

    event IsPlayerWinner(bool);
    event PlayerSquadComposition(bytes4);
    event EnemySquadComposition(bytes4);

    constructor(address squadNFTAddress) {
        squadNFT = SquadNFT(squadNFTAddress);
    }


    function playQuest()
        public
    {
        bytes4 playerSquad = squadNFT.getSquadComposition(msg.sender);
        bytes4 enemySquad = getPseudoRandomSquad();
        emit PlayerSquadComposition(playerSquad);
        emit EnemySquadComposition(enemySquad);

        bool playerWins = executeQuest(playerSquad, enemySquad);
        emit IsPlayerWinner(playerWins);
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
}
