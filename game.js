$("#start").click(function() {
  console.log("en we zijn los");
  let gamePattern = [];

  let buttonColours = ["red", "blue", "green", "yellow"];

  let randomChosenColour = buttonColours[nextSequence()];
// console.log(randomChosenColour);
  flashButton(randomChosenColour);
  geluidAfspelen();

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

  function geluidAfspelen() {
    let buttonSound = new Audio();
    buttonSound.src = "sounds/blue.mp3";
    buttonSound.play();
    console.log(buttonSound);
  }

});





