// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PseudoRandomSquadGenerator {

    function getPseudoRandomSquad()
        internal
        view
        returns (
            bytes4
        )
    {
        uint8 MODULUS = 3;
        bytes32[4] memory hashes;
        bytes1[4] memory squad;

        hashes[0] = keccak256(
                        abi.encodePacked(
                            block.timestamp,
                            blockhash(block.number)
                        )
                    );
        squad[0] = bytes1(uint8(uint256(hashes[0]) % MODULUS));
        for (uint8 i = 1; i < 4; i++) {
            hashes[i] = keccak256(abi.encodePacked(hashes[i-1]));
            squad[i] = bytes1(uint8(uint256(hashes[i]) % MODULUS));
        }
        return (concatBytes(squad[0], squad[1], squad[2], squad[3]));
    }

    function concatBytes(
        bytes1 _a,
        bytes1 _b,
        bytes1 _c,
        bytes1 _d
    ) private pure returns (bytes4) {
        return (bytes4(_a) | (bytes4(_b) >> 8) | (bytes4(_c) >> 16) | (bytes4(_d) >> 24));
    }
}
