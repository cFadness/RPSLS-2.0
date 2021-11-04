"use strict";

class Player {
    constructor(aName){
        this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
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