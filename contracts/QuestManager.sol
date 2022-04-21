// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./QuestExecution.sol";
import "./SquadNFT.sol";
import "./PseudoRandomSquadGenerator.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract QuestManager is QuestExecution, Ownable, PseudoRandomSquadGenerator {

    SquadNFT squadNFT;

    uint256 private mealPrice = 1 ether;
    uint256 private battleFatigue = 1 days;

    uint256 private questPlayedTimestamp;

    event IsPlayerWinner(bool);

    constructor(address squadNFTAddress) {
        squadNFT = SquadNFT(squadNFTAddress);
    }


    function playQuest()
        public
    {

        bytes4 playerSquad = squadNFT.getSquadComposition(msg.sender);
        bytes4 enemySquad = getPseudoRandomSquad();

        bool playerWins = executeQuest(playerSquad, enemySquad);
        emit IsPlayerWinner(playerWins);
    }
}
