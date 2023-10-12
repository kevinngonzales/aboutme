// Create a new JavaScript file in your About Me project. Link it to your index.html
// Create an EventListener(s) that can change 2 styling elements in your index.html
// Attach 2 alert() methods from the JavaScript file to any HTML element that the user can interact with
// Make it easy to find when loading the page. User should see it is clearly interactive 



var welcomeButton = document.getElementById("welcome");

function welcomeAlert() {
  alert("Welcome To My Website!");
}

welcomeButton.addEventListener("click", welcomeAlert);

document.addEventListener("DOMContentLoaded", function() {
  var lightButton = document.getElementById("light");
  var darkButton = document.getElementById("dark");
  var body = document.body;

  var header1 = document.querySelector("h1");
  var header2 = document.querySelector("h2");
  var header3 = document.querySelector("h3");
  var header4 = document.querySelector("h4");
  var header5 = document.querySelector("h5");

  lightButton.addEventListener("click", function() {
    body.style.backgroundColor = "#ffe7d1";
    header1.style.backgroundColor = "#432A24";
    header2.style.backgroundColor = "#432A24";
    header3.style.backgroundColor = "#432A24";
    header4.style.backgroundColor = "#432A24";
    header5.style.backgroundColor = "#432A24";
    header1.style.color = "white";
    header2.style.color = "white";
    header3.style.color = "white";
    header4.style.color = "white";
    header5.style.color = "white";
  });

  darkButton.addEventListener("click", function() {
    body.style.backgroundColor = "#17131B";
    header1.style.backgroundColor = "#786964";
    header2.style.backgroundColor = "#786964";
    header3.style.backgroundColor = "#786964";
    header4.style.backgroundColor = "#786964";
    header5.style.backgroundColor = "#786964";
    header1.style.color = "black";
    header2.style.color = "black";
    header3.style.color = "black";
    header4.style.color = "black";
    header5.style.color = "black";
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var feedbackButton = document.getElementById("feedbackButton");

  function feedbackPrompt() {
    var userFeedback = prompt("Your feedback is greatly appreciated.");
    console.log(userFeedback);
  }

  feedbackButton.addEventListener("click", feedbackPrompt);
});





