"use strict"

const {Gestures} = require("./gestures")

class Paper extends Gestures{
    constructor(){
        super("Paper")
        this.isWinner = ["Rock", "Spock"]
    }

}

module.exports = {
    Paper:Paper
}