// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract HelloZubin {
    //payable contstuctor to reduce gas
    constructor() payable {}

    bytes32 text = "Hello World!";

    event helloSir(string name, address caller);

    function sayHello(string calldata name) external returns(bytes32) {
        emit helloSir(name, msg.sender);
        return text;
    }

}
