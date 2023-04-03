const text = "HTML, CSS, Python, SQL, Selenium Webdriver with Python, Qase, Jira, TestRail, Figma, Invision, Photoshop, Windows, MAC, iOS, Android, Chrome, Safari, FireFox, Opera, Tor Browser, Edge, PostgreSQL, MS SQL Server, MS Access, Slack, Github, ADB, Postman";
const runningText = document.getElementById("running-textt");
let index = 0;

setInterval(function() {
  runningText.textContent = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
}, 40);


