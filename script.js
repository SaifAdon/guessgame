let totalAttempts=5;
let attempts=0;
let totalwon=0;
let totallost=0;

//finding elements 
const form= document.querySelector("form");
const cardBody=document.querySelector(".card-body");
const guessingNumber=form.querySelector("#guessingNumber");
const checkbtn=form.querySelector("#check");
const resultText=cardBody.querySelector(".resultText");
const remainingAttempts=cardBody.querySelector(".remainingAttempts");
const lostwinmessage=document.createElement("p");

form.addEventListener("submit",function(event){
    event.preventDefault();
    
    attempts++;
    if(attempts>5){
        guessingNumber.disabled=true;
        checkbtn.disabled=true;
    }
    else{
        let number=Number(guessingNumber.value);
        checkResult(number);
        remainingAttempts.innerHTML=`Remaining attempts: ${totalAttempts-attempts}`;
    }
});
function checkResult(guessingNumber){
    const randomNumber=getRandomNumber(10);
    if(guessingNumber==randomNumber){
         resultText.innerHTML= `you have won`;
         totalwon++;
    }else{
        resultText.innerHTML= `you have lost; random number was: ${randomNumber}`;
        totallost++;
    }
    lostwinmessage.innerHTML=`Won: ${totalwon}, Lost: ${totallost}`;
    lostwinmessage.classList.add("large-text");
    cardBody.appendChild(lostwinmessage);
}
function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;

}