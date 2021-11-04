"use strict"

const {Gestures} = require("./gestures")

class Rock extends Gestures{
    constructor(){
        super("Rock")
        this.isWinner = ["Scissors", "Lizard"]
    }

}

module.exports = {
    Rock:Rock
}