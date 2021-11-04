"use strict"

const {Gestures} = require("./gestures")

class Scissors extends Gestures{
    constructor(){
        super("Scissors")
        this.isWinner = ["Paper", "Lizard"]
    }

}

module.exports = {
    Scissors:Scissors
}