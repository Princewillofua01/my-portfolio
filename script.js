/*const hireButton = document.querySelector(".btn");

hireButton.addEventListener("click", function(){
    alert("Thank you for your interest! Contact me at: Princewillofua01@gmail.com");
});
const button = document.querySelector(".change-color-btn");
const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "pink",
    "yellow",
    "lightblue"
];
button.addEventListener("click", function() {
    const randomNumber = Math.floor( Math.random()* colors.length);

    document.body.style.backgroundColor = colors[randomNumber];
    
});
const message =document.querySelector("#message");
const textbutton=document.querySelector(".change-text");
    textbutton.addEventListener("click", function(){

    message.textContent = "Thank you for visiting my portfolio! 😊";

});
*/
function greet(){
    alert("welcome back Princewill!😊")
}
const button=document.querySelector(".change-text");
button.addEventListener("click", greet);

const ageButton = document.querySelector(".age-btn");

ageButton.addEventListener("click", function(){

    let age = 21;
    if(age >= 18){
        alert("Welcome!");
    } else{
        alert("Sorry, you're under 18.");
    }

});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

});
const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const bars = document.querySelectorAll(".progress-bar");

window.addEventListener("load", function(){

    bars.forEach(function(bar){

        if(bar.classList.contains("html")){
            bar.style.width = "90%";
        }

        if(bar.classList.contains("javascript")){
            bar.style.width = "70%";
        }
        if(bar.classList.contains("Git")){
            bar.style.width="65%";
        }

        if(bar.classList.contains("python")){
            bar.style.width = "85%";
        }

        if(bar.classList.contains("data")){
            bar.style.width = "50%";
        }

        if(bar.classList.contains("git")){
            bar.style.width = "65%";
        }

    });

});