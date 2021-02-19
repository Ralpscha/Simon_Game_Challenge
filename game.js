let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = "";
let gamePattern = [];
let userClickedPattern = [];



$("button").click(function(){
  let userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);


});

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  console.log(audio);
  // audio.play();
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



