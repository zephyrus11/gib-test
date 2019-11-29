$(window).load(function() {
    // Animate loader off screen
    $(".spinner").fadeOut(1000);;
});

function myFunction() {
    var burger = document.getElementById("burgerMenu");
    var main = document.getElementById("content");
    if (burger.style.width === "250px") {
      burger.style.width = "0";
      burger.style.display = "none";
    } else {
      burger.style.width = "250px";
      burger.style.display = "block";
    }
  }