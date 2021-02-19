let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = "";
let gamePattern = [];
let userClickedPattern = [];

$("button").click(function(){
  let userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  let audio = new Audio("sounds/" + userChosenColour + ".mp3");
  audio.play();
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



// nextSequence();



