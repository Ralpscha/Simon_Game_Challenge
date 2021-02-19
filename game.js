let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = "";
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

$(document).keypress(function (){
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

})


$("button").click(function(){
  let userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);


});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(geluid) {
  let audio = new Audio("sounds/" + geluid + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  console.log(currentColour);
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed")
  },150);
}

// nextSequence();



