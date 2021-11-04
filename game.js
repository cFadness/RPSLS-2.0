"use strict";

const prompt = require("prompt-sync")()
const {Human} = require("./human")
const {AI} = require("./ai")
const {Rock} = require("./rock")
const {Paper} = require("./paper")
const {Scissors} = require("./scissors")
const {Lizard} = require("./lizard")
const {Spock} = require("./spock")

class Game {
    constructor(aName) {
        this.playerOne
        this.playerTwo
        this.aName = aName
        this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
    }

    beginGame() {
        console.log(`This game is called ${this.aName}. The rules of the game:

        Each player will input either ${this.gestures}.

        Rock crushes Scissors  
        Scissors cuts Paper 
        Paper covers Rock 
        Rock crushes Lizard 
        Lizard poisons Spock 
        Spock smashes Scissors 
        Scissors decapitates Lizard 
        Lizard eats Paper 
        Paper disproves Spock 
        Spock vaporizes Rock

        The winner of each round is awarded 1 point, the first player to reach 2 points wins the game`)
    }
    playType() {
        let x = true
        while(x === true){
            let userInput = prompt("Press 1 for singleplayer or press 2 for multiplayer");
            if(userInput == 1){
                x = false
                this.playerOne = new Human()
                this.playerTwo = new AI()
            }
            else if(userInput == 2){
                x = false
                this.playerOne = new Human()
                this.playerTwo = new Human()
            }
            else{
                console.log("Error! Invalid option.")
            }
        }
    }
    throwHands(){
        console.log("FIGHT FIGHT FIGHT!")
        while(this.playerOne.points < 2 && this.playerTwo.points < 2){
            console.log(`${this.playerOne.aName} Pick a gesture. \n Type '1' for Rock \n Type '2' for Paper \n Type '3' for Scissors \n Type '4' for Lizard \n Type '5' for Spock`)
            this.playerOne.pickGesture()
            console.log(`${this.playerTwo.aName} Pick a gesture. \n Type '1' for Rock \n Type '2' for Paper \n Type '3' for Scissors \n Type '4' for Lizard \n Type '5' for Spock`)
            this.playerTwo.pickGesture()
            if(this.playerOne.gesture.isWinner[0] == this.playerTwo.gesture.aName || this.playerOne.gesture.isWinner[1] == this.playerTwo.gesture.aName){
                this.playerOne.points += 1
                console.log( `${this.playerOne.aName} has chosen ${this.playerOne.gesture.aName}. ${this.playerTwo.aName} has chosen ${this.playerTwo.gesture.aName}.`)
                console.log(`${this.playerOne.aName} now has ${this.playerOne.points} point(s)`)
            }
            else if(this.playerTwo.gesture.isWinner[0] == this.playerOne.gesture.aName || this.playerTwo.gesture.isWinner[1] == this.playerOne.gesture.aName){
                this.playerTwo.points += 1
                console.log( `${this.playerOne.aName} has chosen ${this.playerOne.gesture.aName}. ${this.playerTwo.aName} has chosen ${this.playerTwo.gesture.aName}.`)
                console.log(`${this.playerTwo.aName} now has ${this.playerTwo.points} point(s)`)
            }
            else{
                console.log( `${this.playerOne.aName} has chosen ${this.playerOne.gesture.aName}. ${this.playerTwo.aName} has chosen ${this.playerTwo.gesture.aName}.`)
                console.log("Draw! No points awarded to either player.")
            }
        }
    }
    declareWinner() {
        if(this.playerOne.points == 2){
            console.log(`${this.playerOne.aName} Winner winner chicken dinner!`)
        }
        else {
            console.log(`${this.playerTwo.aName} Winner winner chicken dinner!`)
        }
        let x = true
        while (x) {
        console.log("Would you like to play again? 1 for yes, 2 for no.")
        let userInput = prompt()
        if (userInput == 1){
            x = false
            this.runGame()
        }
        else if (userInput == 2){
            x = false
            console.log("Thanks for playing.")
        }
        else {
            console.log("invalid entry.")
        }
        }
    }

    runGame() {
        this.beginGame();
        this.playType();
        this.throwHands();
        this.declareWinner();
    }
}

module.exports = {
    Game: Game
}