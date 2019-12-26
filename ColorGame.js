var numCircles = 6;
var colors = [];
var pickedColor;
var msg = document.querySelector(".message");
var h1 = document.querySelector("h1");
var circles = document.querySelectorAll(".circle");
var colorDisplay = document.getElementById("colorDisplay");
var modeBtn = document.getElementsByClassName("mode");
var resetBtn = document.querySelector(".reset");

init();

function init() {
    //mode buttons event listener
    setUpModeButtons();
    //circles event listener
    setUpCircles();
    reset();
}

resetBtn.addEventListener("click", function() {
    reset();
});

function setUpModeButtons() {
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function() {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numCircles = 3 : numCircles = 6;
            reset();
        });
    }
}

function setUpCircles() {
    for (var i = 0; i < circles.length; i++) {
        circles[i].addEventListener("click", function() {
            //store color of clicked circle
            var clickedColor = this.style.backgroundColor;
            //compare clickedColor to pickedColor
            if (clickedColor === pickedColor) {
                msg.textContent = "Correct";
                changeColor(clickedColor);
                resetBtn.textContent = "Play Again?";
                h1.style.backgroundColor = clickedColor;
            } else {
                msg.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numCircles);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    h1.style.backgroundColor = "#CC0000";
    msg.textContent = "";
    for (var i = 0; i < circles.length; i++) {
        if (colors[i]) {
            circles[i].style.display = "block";
            circles[i].style.backgroundColor = colors[i];
        } else {
            circles[i].style.display = "none";
        }
    }
}

function generateRandomColors(num) {
    //create an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}



function changeColor(color) {
    //loop through all circles
    for (var i = 0; i < circles.length; i++) {
        //change color of each circle 
        circles[i].style.backgroundColor = color;
    }
}