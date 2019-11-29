$(window).load(function() {
    // Animate loader off screen
    $(".spinner").fadeOut(1000);
});

function loadSpinner(){
    $(".spinner").fadeOut(1000);
}

function myFunction() {
    var burger = document.getElementById("burgerMenu");
    if (burger.style.width === "250px") {
      burger.style.width = "0";
      burger.style.display = "none";
    } else {
      burger.style.width = "250px";
      burger.style.display = "block";
    }
  }
function showAll() {
    var football = document.getElementById("football");
    var badminton = document.getElementById("badminton");
    var snooker = document.getElementById("snooker");
    var rugby = document.getElementById("rugby");
    football.style.display = "block";
    badminton.style.display = "block";
    snooker.style.display = "block";
    rugby.style.display = "block";
}
function showFootball() {
    football.style.display = "block";
    badminton.style.display = "none";
    snooker.style.display = "none";
    rugby.style.display = "none";
}
function showBadminton() {
    badminton.style.display = "block";
    football.style.display = "none";
    snooker.style.display = "none";
    rugby.style.display = "none";
}
function showSnooker() {
    snooker.style.display = "block";
    football.style.display = "none";
    badminton.style.display = "none";
    rugby.style.display = "none";
}
function showRugby() {
    rugby.style.display = "block";
    football.style.display = "none";
    badminton.style.display = "none";
    snooker.style.display = "none";
}