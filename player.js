"use strict";

const {Rock} = require("./rock")
const {Paper} = require("./paper")
const {Scissors} = require("./scissors")
const {Lizard} = require("./lizard")
const {Spock} = require("./spock");


class Player {
    constructor(aName){
        this.gestures = [new Rock(), new Paper(), new Scissors(), new Lizard(), new Spock()];
        this.points = 0;
        this.aName = aName;
        this.gesture;
    }
    pickGesture(){
    }
}

module.exports = {
    Player:Player
}