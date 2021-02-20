
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
  playSound(userChosenColour);
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);

  checkAnswer(userClickedPattern.length - 1);


});

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  randomChosenColour = buttonColours[randomNumber];
  $("#"+randomChosenColour).fadeOut(500).fadeIn(100);
  playSound(randomChosenColour);
  gamePattern.push(randomChosenColour);
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
  },100);
}

function checkAnswer(currentLevel) {
  console.log("GamePattern: ", gamePattern);
  console.log("UserPattern: ", userClickedPattern);

  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if(userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);

    }
  } else {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game over, Press Any Key to Restart");
    setTimeout(function (){
      $("body").removeClass("game-over");
    }, 200);

    startOver();

  }
}

function gameOver(){
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over", 300);
  })
  $("h1").text("Game over, Press Any Key to Restart");
  $(document).keypress(startOver);
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;

}

