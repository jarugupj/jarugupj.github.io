// Show/Hide Implementation
let shown = false;
function showhideEmail() {
  const emailDiv = document.getElementById('email');
  if (shown) {
    emailDiv.innerHTML = "";
    shown = false;
  } else {
    const myemail = "<a href='mailto:jarugupj" + "@" + "mail.uc.edu'>jarugupj" + "@" + "mail.uc.edu</a>";
    emailDiv.innerHTML = myemail;
    shown = true;
  }
}

// Digital Clock
function displaytime() {
  document.getElementById('digit-clock').innerHTML = "Current time: " + new Date();
}
setInterval(displaytime, 500);

// Analog Clock
var canvas = document.getElementById("analog-clock");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

// Joke API using jQuery
function loadJoke() {
  $.get("https://v2.jokeapi.dev/joke/Any?type=single", function(result) {
    console.log("From jokeAPI: " + JSON.stringify(result));
    $("#joke-box").text("Joke of the minute: " + result.joke);
  });
}
setInterval(loadJoke, 60000);

// Cookie-based Welcome Message
window.onload = function () {
  showGreeting();
  loadJoke();
  loadXKCDComic();

  const now = new Date();
  const lastVisit = getCookie("lastVisit");
  const msgBox = document.getElementById("welcome-message");

  if (msgBox) {
    if (lastVisit) {
      msgBox.innerText = "Welcome back! Your last visit was " + moment(lastVisit).format('LLLL');
    } else {
      msgBox.innerText = "Welcome to my homepage for the first time!";
    }
  }

  setCookie("lastVisit", now.toString(), 365);
};

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/";
}

function getCookie(name) {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}

function showGreeting() {
  const hour = new Date().getHours();
  let greeting = "Hello!";
  if (hour < 12) greeting = "Good morning!";
  else if (hour < 18) greeting = "Good afternoon!";
  else greeting = "Good evening!";
  document.getElementById("greeting-message").innerText = greeting + " Welcome to my site.";
}

function loadXKCDComic() {
  const proxyUrl = "https://api.allorigins.win/raw?url=";
  const targetUrl = "https://xkcd.com/info.0.json";

  fetch(proxyUrl + encodeURIComponent(targetUrl))
    .then(response => response.json())
    .then(data => {
      document.getElementById("xkcd-img").src = data.img;
      document.getElementById("xkcd-img").alt = data.alt;
      document.getElementById("xkcd-title").innerText = data.title + " — " + data.alt;
    })
    .catch(error => {
      console.error("Failed to load XKCD comic:", error);
      document.getElementById("xkcd-title").innerText = "Oops! Couldn't load today's comic.";
    });
}
