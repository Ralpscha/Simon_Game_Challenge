let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

let randomChosenColour = buttonColours[nextSequence()];
// console.log(randomChosenColour);
flashButton(randomChosenColour);
gamePattern.push(randomChosenColour);
// console.log(gamePattern);


function nextSequence() {
  let randomNumber = Math.round(Math.random() * 3);
  return randomNumber;
}



function flashButton(randomChosenColour) {
  // console.log(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(200).fadeIn(200);
}

