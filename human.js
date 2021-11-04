"use strict"

const prompt = require("prompt-sync")()
const {Player} = require("./player")

class Human extends Player{
    constructor(){
        console.log("Please enter your name.")
        let humanName = prompt()
        super(humanName)
    }
    pickGesture(){
        let x = true
        let userInput
            while (x){
            userInput = prompt()
            if(parseInt(userInput) >= 1 && parseInt(userInput) <= this.gestures.length) {
                this.gesture = this.gestures[parseInt(userInput)-1]
                x = false 
            } else {
                console.log("Invalid entry.")
            }
        }
    }
}


module.exports = {
    Human:Human
}