const dinosaur = document.querySelector(".dinosaur");
const cactus = document.querySelector(".cactus");
let score = document.querySelector(".score");
let gameover = document.querySelector(".gameover");
let interval = 0;
let playerScore = 0;
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`
}
interval = setInterval(scoreCounter, 200);

function
jump() {
    if (dinosaur.classList != "jump") {
        dinosaur.classList.add("jump");
        setTimeout(function() {
            dinosaur.classList.remove("jump");
        }, 300);
    }
}

function changeBg() {
    const images = [
        "./assets/imgcactus.png ",
        "./assets/imgdinosaur1.png ",
        "./assets/imgdinosaur2.png ",
        "./assets/imgdinosaur3.png ",
    ]
    const bg = images[Math.floor(Math.random() * images.length)];
    console.log(bg);
    document.getElementById("cactus").style.backgroundImage = `url(${bg})`;
}
var changebhInterval = setInterval(changeBg, 3000);

let isAlive = setInterval(function() {
    // get current dino Y position
    let dinosaurTop = parseInt(window.getComputedStyle(dinosaur, null).getPropertyValue("top"));
    // console.log(dinosaurTop);
    // get current cactus X position
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );
    // console.log(cactusLeft);
    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinosaurTop >= 140) {
        // collision
        gameover.style.opacity = "1";
        clearInterval(interval);
        cactus.style.animation = "none";
        dinosaur.style.animation = "none";
        cactus.style.backgroundImage = "";
        cloud.style.animation = "block";
        // coin.style.animation = "block";
        clearInterval(changebhInterval);
        score.innerHTML = `Score <b>${playerScore}</b>`
        console.log(playerScore, "+++++++++++++++++++++");
        // alert("Game Over!");
    }
}, 10);
document.addEventListener("keydown", function(event) {
    jump();
});