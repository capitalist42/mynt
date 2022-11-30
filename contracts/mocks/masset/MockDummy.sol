// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

abstract contract IMockDummy {
    function getVersion() external virtual pure returns(string memory);
}

contract MockDummy1 is IMockDummy {
    function getVersion() external virtual override pure returns (string memory) {
        return "1";
    }
}

contract MockDummy2 is IMockDummy {
    function getVersion() external virtual override pure returns (string memory) {
        return "2";
    }
}
