"use strict"

const {Gestures} = require("./gestures")

class Spock extends Gestures{
    constructor(){
        super("Spock")
        this.isWinner = ["Rock", "Scissors"]
    }

}

module.exports = {
    Spock:Spock
}