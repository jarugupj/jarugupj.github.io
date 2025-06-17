# index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZCLQPB08KP"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-ZCLQPB08KP');
  </script>
  
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Phani Bharadwaj Jarugumilli – Profile</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

</head>



<body>
  <header class="bg-light py-5">
    <div class="container text-center">
      <img src="assets/phani.jpeg" alt="Phani Bharadwaj Jarugumilli" alt="Phani Bharadwaj Jarugumilli" class="rounded-circle mb-3" width="150" height="150">
      <h1 class="display-5">Phani Bharadwaj Jarugumilli</h1>
      <p>
        <a href="mailto:jarugupj@mail.uc.edu">jarugupj@mail.uc.edu</a> |
        <a href="https://www.linkedin.com/in/phanibharadwajjarugumilli/" target="_blank">LinkedIn</a>
      </p>
    </div>
  </header>

<main class="container my-5">

  <!-- Welcome Message -->
  <div id="welcome-message" class="alert alert-info text-center"></div>
  <!-- Greeting Message -->
  <div id="greeting-message" class="alert alert-success text-center"></div>

  <!-- About Section -->
  <section id="about" class="bg-white pt-3 pb-5 border-bottom shadow-sm">
    <div class="container">
      <h2 class="text-center fw-bold text-uppercase mb-4">About Me</h2>
      <p class="lead text-center mx-auto" style="max-width: 800px;">
        I’m a driven Computer Science student at the University of Cincinnati with a passion for building intelligent systems that solve real-world problems. From automating factory workflows at BMW to developing AI chatbots for healthcare and enrollment systems, I love blending software, data, and machine learning to create impact. I’m always exploring ways to make technology more intuitive, scalable, and meaningful.
      </p>
    </div>
  </section>

  <!-- Education -->
  <section id="education" class="mb-5 p-3 bg-white border rounded-3 shadow">
    <h2 class="bg-dark-subtle p-2 fw-bold text-uppercase border border-3 border-dark">Education</h2>
    <ul class="pb-3">
      <li>
        <strong>Bachelor of Science in Computer Science</strong>, University of Cincinnati, Expected May 2027<br>
        GPA: 3.81 (Dean’s List)<br>
        University Honors Program Scholar<br>
        Relevant Coursework: Data Structures and Algorithms, Gen AI, Deep Learning, Computer Systems, Engineering and Design Thinking, Linear Algebra, Calculus, Python Programming, Discrete Structures, Probability and Statistics
      </li>
    </ul>
  </section>

  <!-- Experience -->
  <section id="experience" class="mb-5 p-3 bg-white border rounded-3 shadow">
    <h2 class="bg-dark-subtle p-2 fw-bold text-uppercase border border-3 border-dark">Experience</h2>
    <ul class="pb-3">
      <li>
        <strong>Software and Data Engineering Co-op – BMW Manufacturing Co., LLC</strong> (Jan 2025 – May 2025)
        <ul>
          <li>Engineered Python-SQL pipelines to process 60,000+ downtime alarms, reducing false alerts by 38%</li>
          <li>Automated email classification for 1,000+ messages using NLP, cutting manual review by 95%</li>
          <li>Built an APEX app to track overtime for 300+ associates, reducing expenses by 17%</li>
          <li>Enhanced inspection speed with NVILA video models from wearable camera data</li>
        </ul>
      </li>
      <li>
        <strong>AI/ML Research Co-op – Live Well Collaborative</strong> (May 2024 – Dec 2024)
        <ul>
          <li>Developed a RAG chatbot for P&G that improved workflow efficiency by 30%</li>
          <li>Evaluated 85 AI tools; implemented 5 to optimize healthcare systems</li>
          <li>Redesigned PASSPORT enrollment, reducing service delays by 20%</li>
        </ul>
      </li>
      <li>
        <strong>Student Orientation Leader – University of Cincinnati</strong> (Jan 2023 – Dec 2024)
        <ul>
          <li>Led orientation for 1,000+ students, boosting admittance efficiency by 30%</li>
          <li>Assisted 200+ students with financial aid concerns</li>
        </ul>
      </li>
    </ul>
  </section>

  <!-- Projects -->
  <section id="projects" class="mb-5 p-3 bg-white border rounded-3 shadow">
    <h2 class="bg-dark-subtle p-2 fw-bold text-uppercase border border-3 border-dark">Projects</h2>
    <ul class="pb-3">
      <li><strong>Q-Bot: AI-Powered Quality Bot (BMW)</strong><br>
        RAG chatbot for defect analysis; reduced review time by 93% for 300+ users
      </li>
      <li><strong>FinVest: Budget Smart & Invest Sharp</strong><br>
        ASP.NET + Plaid/Alpha Vantage APIs; won Best Finance Software Award 2024
      </li>
      <li><strong>NeuroPlay: AI-Powered RL Agent</strong><br>
        Pong-playing agent with 95% win rate; used RL and Adam Optimizer
      </li>
    </ul>
  </section>

  <!-- Skills -->
  <section id="skills" class="mb-5 p-3 bg-white border rounded-3 shadow">
    <h2 class="bg-dark-subtle p-2 fw-bold text-uppercase border border-3 border-dark">Skills</h2>
    <ul class="pb-3">
      <li><strong>AI & Machine Learning:</strong> Generative AI, Deep Learning, Reinforcement Learning, NLP, RAG</li>
      <li><strong>Cloud & Data:</strong> AWS, Google Cloud, Elasticsearch, Oracle APEX, OpenAI API</li>
      <li><strong>Programming & Web:</strong> Python, C, C++, JavaScript, SQL, MATLAB, HTML, CSS, React, Node.js, Bootstrap, Flask</li>
      <li><strong>Tools:</strong> Pandas, PyTorch, NumPy, Git, R, LabVIEW, SQL Server, MongoDB, MySQL, Figma</li>
    </ul>
  </section>

    <!-- Clock Section -->
  <section class="mb-5 text-center">
    <div id="digit-clock" class="mb-3 fw-bold"></div>
    <canvas id="analog-clock" width="150" height="150" style="background-color:#999;"></canvas>
  </section>

  <!-- Email Toggle -->
  <section class="mb-5 text-center">
    <button onclick="showhideEmail()" class="btn btn-outline-dark mb-2">Show/Hide Email</button>
    <div id="email"></div>
  </section>

  <!-- Joke Section -->
  <section class="mb-5 text-center">
    <h3 class="fw-bold">Joke of the Minute</h3>
    <div id="joke-box" class="p-3 bg-warning-subtle border rounded"></div>
    <p class="text-muted small mt-2">
      Disclaimer: This joke is provided by a public API (jokeapi.dev). I do not control its content.
    </p>
  </section>


  <!-- XKCD Comic Section -->
  <section class="mb-5 text-center">
    <h3 class="fw-bold">Today's XKCD Comic</h3>
    <img id="xkcd-img" src="" alt="XKCD Comic" class="img-fluid rounded border" style="max-height: 400px;">
    <p id="xkcd-title" class="mt-2 fst-italic text-muted"></p>
    <p class="text-muted small mt-2">
      Disclaimer: This comic is fetched from XKCD's public API. I do not own or moderate the content.
    </p>
  </section>


  <!-- Resume -->
  <section id="resume" class="mb-5">
    <h2>Resume</h2>
    <p>
     <a href="assets/resume.pdf" target="_blank" class="btn btn-outline-primary btn-lg">
        <i class="bi bi-download"></i> Download Résumé
     </a>
    </p>
  </section>

  <!-- WAPH Course Link -->
  <section id="waph-course" class="mb-5 text-center">
    <a href="waph.html" class="btn btn-outline-secondary btn-lg btn">Explore My WAPH Projects & Labs</a>
  </section>

</main>

  <footer class="bg-light py-3 text-center">
    <small>&copy; 2025 Phani Bharadwaj Jarugumilli</small>
  </footer>


  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
  <script src="https://waph-phung.github.io/clock.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

# script.js
```javascript
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
```

# waph.html
```html
<!DOCTYPE html>
<html>
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZCLQPB08KP"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-ZCLQPB08KP');
  </script>
  <meta charset="utf-8">
  <title>WAPH-jarugupj Phani Bharadwaj Jarugumilli</title>
  <link rel="stylesheet" href=https://waph-phung.github.io/style3.css>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
  <style>
  .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
  }

  .round {
    border-radius: 8px;
  }

  #response {
    background-color: #ff9800; /* Orange */
  }
  </style>

</head>
<body>
  <div class="container wrapper">
    <div id="top">
      <h1>Web Application Programming and Hacking</h1>
      <h2>Front-end Web Development Lab</h2>
      <h3>Instructor: Dr. Phu Phung</h3>
    </div>

    <div class="wrapper">
      <div id="menubar">
        <h3>Student: Phani Bharadwaj Jarugumilli</h3>
        <div id="email" onclick="showhideEmail()">Show my email</div>

        <img src="images/phani.jpeg" alt="My headshot" width="200">
        <div id="digit-clock"></div>
        <canvas id="analog-clock" width="150" height="150" style="background-color:#999"></canvas>
        <script src="https://waph-phung.github.io/clock.js"></script>
        <script>
          function displaytime(){
            document.getElementById('digit-clock').innerHTML="Current time: "+ new Date();
          }
          setInterval(displaytime,500);

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

          function getEcho() {
            var input = document.getElementById("data").value.trim();
            if (input.length === 0) {
              alert("Input cannot be empty");
              return;
            }

            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
              if (this.readyState === 4 && this.status === 200) {
                console.log("Received data = " + xhttp.responseText);
                document.getElementById("response").innerText = 
                  "Response from server: " + xhttp.responseText;
              }
            };

            xhttp.open("GET", "echo.php?data=" + input, true);
            xhttp.send();
            document.getElementById("data").value = "";
          }

          function jQueryAjax(){
            var input = $("#data").val().trim();
            if (input.length == 0 ){
              alert("Input cannot be empty");
              return;
            }

            $.get("echo.php?data="+input,
                   function(result){
                    $("#response").text("Response from server: " + result);
                   }
                 );
            $("#data").val("");
          }

          function jQueryAjaxPost() {
            var input = $("#data").val().trim();
            if (input.length == 0){
              alert("Input cannot be empty");
              return;
            } 
              
            $.post("echo.php",{data: input},
                    function( result ) {
                    $("#response").text("Response from server: " + result);
                    }
                  );
            $("#data").val("");
          }

          $.get("https://v2.jokeapi.dev/joke/Programming?type=single",
                function(result){
                    console.log("From jokeAPI: " + JSON.stringify(result));
                    $("#response").text("A programming joke of the day: " + result.joke);

                }

            );// this will be executed automatically
          async function guessAge(name) {
            const response = await fetch("https://api.agify.io/?name=" + name);
            const result = await response.json();

            $("#response").text("Hi " + name + ", your age should be " + result.age);
          }


        </script>
      </div>


      <div id="main">
        <p>A simple HTML page</p>
        Using the <a href="https://www.w3schools.com/html" target="_blankS">W3Schools template</a>
        <hr>
        <b>Interaction with forms</b>
        <div>
          <i>Form with an HTTP GET Request</i>
          <form action="/echo.php" method="GET"> 
            Your input: <input name="data">
            <input class="button round" type="submit" value="Submit">
          </form>
        </div>

        <div> 
          <i>Form with an HTTP POST Request</i>
          <form action="/echo.php" method="POST" name="echo_post">
            Your input: <input name="data" onkeyup="console.log('You have pressed a key')">
            <input class="button round" type="submit" value="Submit">
          </form>
        </div>

        <div>
          <i>Ajax requests</i><br>
            Your input:
            <input name="data"
                   onkeypress="console.log('You have pressed a key')" id="data">
            <input class="button round" type="button" value="Ajax Echo" onclick="getEcho()">
            <input class="button round" type="button" value="Ajax jQuery GET" onclick="jQueryAjax()">
            <input class="button round" type="button" value="Ajax jQuery POST" onclick="jQueryAjaxPost()">
            <input class="button round" type="button" value="guess Age" onclick="guessAge($('#data').val())">
            <div id="response"></div>
        </div>
        <hr>
        <b>Experiments with JavaScript code</b><br>
        <i>Inlined JavaScript</i>
        <div id="date" onclick="document.getElementById('date').innerHTML=Date()">Click here to show Date()</div>

        <hr>
        <b>Course Projects Overview</b><br>
        <p>Below is a summary of the labs and hackathon completed as part of the WAPH course:</p>
        <ul>
          <li><strong>Lab 0: Development Environment Setup</strong> – Installed Ubuntu 22.04 VM, configured Git, Apache, and SSH authentication.</li>
          <li><strong>Lab 1: Foundations of the Web</strong> – Used Wireshark and Telnet to explore HTTP, created CGI in C and PHP POST/GET pages.</li>
          <li><strong>Lab 2: Front-end Web Development</strong> – Built dynamic web pages using HTML, JavaScript, jQuery, and integrated Web APIs like JokeAPI and Agify.</li>
          <li><strong>Hackathon 1: Cross-site Scripting (XSS)</strong> – Exploited reflected XSS, tested payloads, and implemented secure coding defenses.</li>
        </ul>
        <p>GitHub Repository: <a href="https://github.com/jarugupj/waph-jarugupj" target="_blank">waph-jarugupj</a></p>

      </div>

    </div>
  </div>
  <script src="email.js"></script>
</body>
</html>
```
