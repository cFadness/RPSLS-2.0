"use strict"

const {Gestures} = require("./gestures")

class Lizard extends Gestures{
    constructor(){
        super("Lizard")
        this.isWinner = ["Spock", "Paper"]
    }

}

module.exports = {
    Lizard:Lizard
}