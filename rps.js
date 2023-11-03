


const playerOneScoreHolder = document.getElementById("score1")
const playerTwoScoreHolder = document.getElementById("score2")
let ineye = playerOneScoreHolder
let Compu = playerTwoScoreHolder
const rock = document.getElementById("rockbtn")
const paper = document.getElementById("paperbtn")
const scissors = document.getElementById("scissorsbtn")
const Winner = document.getElementById("winner")
const playerHand = document.getElementById("playerhand")
const computerHand = document.getElementById("computerhand")

let user = playerHand
let comp = computerHand


const rock_hand = `<img src="../image/rock_1.png" alt="">`
const paper_hand = `<img src="../image/rock_2.png" alt="">`
const scissors_hand = `<img src="../image/rock_3.png" alt="">`
let initialimg = `<img src="../image/rock_.png" alt="">`
let computerHands = rock_hand
const swap = ()=>{
    return Math.floor(Math.random() * 3 + 1)
}
const alls = (Swap)=>{
    return  `<img src="../image/rock_${Swap}.png" alt="">`
}
let playAgain=true
//changing img
// let player1 = playerHand
// let computer = computerHand

//clicking of buttons
const hands = document.getElementById("hands")
hands.addEventListener("click",()=>{
    playerHand.style.animation = "shakeplayer 2s ease "
    computerHand.style.animation = "computershake 2s ease "
    playerOneScoreHolder.innerText = " Ineye In Game"
    playerTwoScoreHolder.innerText = " Comp In Game"
    
    
})

rock.addEventListener("click",()=>{
    if(playerHand.innerHTML = rock_hand){
        let pickrandom = swap()
        computerHand.innerHTML = alls(pickrandom)   
        if(playerHand.innerHTML===rock_hand && computerHand.innerHTML===rock_hand){
            Winner.innerText="it's a tie!"
        }else if(playerHand.innerHTML===rock_hand && computerHand.innerHTML===paper_hand){
            Winner.innerText="computer wins!!"
        }else if (playerHand.innerHTML===rock_hand && computerHand.innerHTML===scissors_hand){
            Winner.innerText="player wins!!"
        }
        
        

    }
    // if(playerHand.innerHTML===rock_hand && computerHand===rock_hand){
        
    //     Winner.innerText="its a tie"
    // }else if(playerHand.innerHTML===rock_hand && computerHand===paper_hand){
    //     Winner.innerText="computer wins"
    // }else if(playerHand.innerHTML===rock_hand && computerHand===scissors_hand){
    //     Winner.innerText="player wins"
    // }

})

paper.addEventListener("click",()=>{
    if(playerHand.innerHTML = paper_hand){
        let pickrandom = swap()
        computerHand.innerHTML = alls(pickrandom)   
        if(playerHand.innerHTML===paper_hand && computerHand.innerHTML===paper_hand){
            Winner.innerText="it's a tie!"
        }else if(playerHand.innerHTML===paper_hand && computerHand.innerHTML===scissors_hand){
            Winner.innerText="computer wins!!"
        }else if (playerHand.innerHTML===paper_hand && computerHand.innerHTML===rock_hand){
            Winner.innerText="player wins!!"
        }
    }
    
})

scissors.addEventListener("click",()=>{
    if(playerHand.innerHTML = scissors_hand){
        let pickrandom = swap()
        computerHand.innerHTML = alls(pickrandom)  
        if(playerHand.innerHTML===scissors_hand && computerHand.innerHTML===scissors_hand){
            Winner.innerText="it's a tie!"
        }else if(playerHand.innerHTML===scissors_hand && computerHand.innerHTML===paper_hand){
            Winner.innerText="computer wins!!"
        }else if (playerHand.innerHTML===scissors_hand && computerHand.innerHTML===rock_hand){
            Winner.innerText="player wins!!"
        }
    }
    
})



//restart
const restartButton = document.getElementById("restart")
restartButton.addEventListener("click", () =>{
    Winner.innerText="Choose your move"
    playerHand.innerHTML=initialimg
    computerHand.innerHTML=initialimg
    playerOneScoreHolder.innerText = " Ineye "
    playerTwoScoreHolder.innerText = " Comp"
})

