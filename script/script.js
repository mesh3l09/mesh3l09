// #####################
// First Page

// #####################

function randomPosition() {
  $("#monkey1").css("visibility", "visible");
  var imageArray = [
    "./img/snjab.jpg",
    "./img/snjab.jpg",
    "./img/snjab.jpg",
    "./img/fly.jpg",
    "./img/fly2.jpg",
    "./img/fly.jpg"
  ];
  var optionsColArray = ["1/2", "2/3", "3/4", "4/5", "5/6"];
  var optionsRowArrayGround = ["3/4", "4/5", "5/6"];
  var optionsRowArraySky = ["1/2", "2/3"];

  var randCol =
    optionsColArray[Math.floor(Math.random() * optionsColArray.length)];
  var randRowGround =
    optionsRowArrayGround[
      Math.floor(Math.random() * optionsRowArrayGround.length)
    ];
  var randRowSky =
    optionsRowArraySky[Math.floor(Math.random() * optionsRowArraySky.length)];
  var randPicture = imageArray[Math.floor(Math.random() * imageArray.length)];
  $("#monkey1").attr("src", randPicture);
  $("#monkey1").css("grid-column", randCol);
  $("#monkey1").css("grid-row", function skyOrGround() {
    if (randPicture == "./img/fly.jpg" || randPicture == "./img/fly2.jpg")
      return randRowSky;
    else {
      return randRowGround;
    }
  });
  $("#monkey1").addClass("animated infinite bounce");
}
var height;
var NameOfPlayer;

$(document).ready(function() {
  var playerName;
  var score = 0;

  // first page , the button that redirct to the game page
  $("#btn").click(function() {
    playerName = $("#playerName").val();
    localStorage.setItem("username", playerName);
    $(location).attr("href", "Game.html");
  });

  // ###############
  // Start the game when click on the Start
  $("#start").click(function() {
    $("#start").css("visibility", "hidden");
    randomPosition(); // show the picture randomly
    $("#monkey1").css("visibility", "visible");
    $("h2").css("visibility", "hidden ");

    //#############################
    // Timer:
    var downloadTimer = setInterval(function() {
      height1 = parseInt($(".in").css("height"));
      randomPosition();
      $("#monkey1").click(function() {
        $("#monkey1").css("visibility", "hidden");
      });
      $(".in").height("+=10");
      if (height1 > "150") {
        $("#msg").css("visibility", "visible");
      }
      if (height1 >= "200") {
        clearInterval(downloadTimer);
        $("#monkey1").css("visibility", "hidden");
        showSweetAlert();
        $("#msg").html(score);
        $("#msg").css("font-size", "25px");
        $("#msg").css("color", "rgb(198, 209, 41)");
      }
    }, 900);
  });

  // #########################
  // function that show thw sweet alert
  function showSweetAlert() {
    // swal("Good job!", `${localStorage.getItem("username")} Your Score is ${score}`, "success");
    swal({
      title: `${localStorage.getItem("username")} Your Score is`,
      text: `${score}`,
      type: "success"
    }).then(function() {
      window.location = "index.html";
    });
  }

  // ################
  // count the score
  $("#monkey1").click(function() {
    score++;
    console.log(score);
  });
});
