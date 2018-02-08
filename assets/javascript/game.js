// Variables
var myScore;
var randVal;
var purpVal;
var greenVal;
var blueVal;
var pinkVal;
var wins = 0;
var losses = 0;

// Generate a random value given a Min and a Max
function getRandom(min,max){
    var result = Math.floor((Math.random() * max) + min);
    return result;
}

// initialize screen
function initScreen() {

    // Set score to zero
    myScore = 0;
    $("#myScore").html(myScore);

    // Set target value
    randVal = getRandom(19,120);
    $("#randVal").html(randVal);

    // Set crystal values
    purpVal = getRandom(1,12);
    greenVal = getRandom(1,12);
    blueVal = getRandom(1,12);
    pinkVal = getRandom(1,12);

    console.log(purpVal,"Purple");
    console.log(blueVal,"Blue");
    console.log(pinkVal,"Pink");
    console.log(greenVal,"Green");

    // Update wins and losses
    $("#wins").html(wins);
    $("#losses").html(losses);

}

initScreen();

$("#purp-btn").click(function() {
    // Add the value of purp to the score
    myScore = myScore + purpVal;
    $("#myScore").html(myScore);

    // Check if the value meets or exceeds the target and handle
    if (myScore === randVal) {
        wins++;
        initScreen();
    } else if (myScore > randVal) {
        losses++;
        initScreen();
    }
});

$("#blue-btn").click(function () {
    // Add the value of blue to the score
    myScore = myScore + blueVal;
    $("#myScore").html(myScore);

    // Check if the value meets or exceeds the target and handle
    if (myScore === randVal) {
        wins++;
        initScreen();
    } else if (myScore > randVal) {
        losses++;
        initScreen();
    }
});

$("#pink-btn").click(function () {
    // Add the value of pink to the score
    myScore = myScore + pinkVal;
    $("#myScore").html(myScore);

    // Check if the value meets or exceeds the target and handle
    if (myScore === randVal) {
        wins++;
        initScreen();
    } else if (myScore > randVal) {
        losses++;
        initScreen();
    }
});

$("#green-btn").click(function () {
    // Add the value of green to the score
    myScore = myScore + greenVal;
    $("#myScore").html(myScore);

    // Check if the value meets or exceeds the target and handle
    if (myScore === randVal) {
        wins++;
        initScreen();
    } else if (myScore > randVal) {
        losses++;
        initScreen();
    }
});