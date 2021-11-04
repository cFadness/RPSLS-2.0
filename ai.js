"use strict"
const prompt = require("prompt-sync")()
const {Player} = require("./player")

class AI extends Player{
    constructor(){
        let aiName = "Robo"
        super(aiName)
        
    }
    pickGesture(){
        let randomInput = Math.floor(Math.random() * this.gestures.length)
        this.gesture = this.gestures[randomInput]   
    }
}

module.exports = {
    AI:AI
}