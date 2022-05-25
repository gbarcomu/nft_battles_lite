// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract QuestExecution {
    event PseudoRandomNumbers(uint8, uint8, uint8);
    event BattleWinners(bool, bool, bool);

    function executeQuest(bytes4 playerSquad, bytes4 gmSquad)
        internal
        returns (bool)
    {
        uint8[3] memory battles;
        bool[3] memory winners;
        (battles[0], battles[1], battles[2]) = getPseudoRandomNumbers();
        for (uint8 i = 0; i < 3; i++) {
            winners[i] =
                battles[i] >= winningOddsCalculator(playerSquad[i], gmSquad[i]);
        }
        emit BattleWinners(winners[0], winners[1], winners[2]);
        return ((winners[0] ? 1 : 0) +
            (winners[1] ? 1 : 0) +
            (winners[2] ? 1 : 0) >
            1);
    }

    function getPseudoRandomNumbers()
        internal
        returns (
            uint8,
            uint8,
            uint8
        )
    {
        bytes32[3] memory hashes;
        uint8[3] memory battles;
        uint8 MODULUS = 100;

        hashes[0] = keccak256(
                        abi.encodePacked(
                            block.timestamp,
                            blockhash(block.number)
                        )
                    );
        battles[0] = uint8(uint256(hashes[0]) % MODULUS);
        for (uint8 i = 1; i < 3; i++) {
            hashes[i] = keccak256(abi.encodePacked(hashes[i-1]));
            battles[i] = uint8(uint256(hashes[i]) % MODULUS);
        }
        emit PseudoRandomNumbers(battles[0], battles[1], battles[2]);
        return (battles[0], battles[1], battles[2]);
    }

    function winningOddsCalculator(bytes1 playerUnit, bytes1 gmUnit)
        internal
        pure
        returns (uint8)
    {
        uint8 NEUTRAL_FIGHT = 50;
        uint8 FAVOURABLE_FIGHT = 30;
        uint8 UNFAVOURABLE_FIGHT = 70;

        uint8 pU = uint8(playerUnit);
        uint8 gmU = uint8(gmUnit);

        if (pU < gmU) {
            pU += 3;
        }

        if (pU == gmU) {
            return NEUTRAL_FIGHT;
        } else if (pU - gmU == 1) {
            return UNFAVOURABLE_FIGHT;
        } else {
            return FAVOURABLE_FIGHT;
        }
    }
}
