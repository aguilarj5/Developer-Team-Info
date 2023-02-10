const teamMember = require("./class");
const cards = require("./createCards");
const questions = require("./questions");
const fs = require("fs");
const { stringify } = require("querystring");

let htmlCards = "";

function init() {
  const inquirer = require("inquirer");

  inquirer.prompt(questions.managerQuestions).then((mng) => {
    let manager = new teamMember.Manager(
      mng.managerName,
      mng.managerId,
      mng.managerEmail,
      mng.managerOffice
    );

    htmlCards = cards.createManagerCard(manager);
    checkComplete();
  });
}

function checkComplete() {
  const inquirer = require("inquirer");

  inquirer.prompt(questions.checkComplete).then((response) => {
    if (stringify(response) === "done=Yes") {
      console.log("Team input complete");
      createHTML(htmlCards);
    } else {
      checkMember();
    }
  });
}

function checkMember() {
  const inquirer = require("inquirer");

  inquirer.prompt(questions.checkMember).then((response) => {
    if (stringify(response) === "done=Engineer") {
      createEngineer();
    } else {
      createIntern();
    }
  });
}

function createEngineer() {
  const inquirer = require("inquirer");

  inquirer.prompt(questions.engineerQuestions).then((eng) => {
    let engineer = new teamMember.Engineer(
      eng.engineerName,
      eng.engineerId,
      eng.engineerEmail,
      eng.gitUsername
    );

    htmlCards = htmlCards + cards.createEngineerCard(engineer);
    checkComplete();
  });
}

function createIntern() {
  const inquirer = require("inquirer");

  inquirer.prompt(questions.internQuestions).then((int) => {
    let intern = new teamMember.Intern(
      int.internName,
      int.internId,
      int.internEmail,
      int.school
    );

    htmlCards = htmlCards + cards.createInternCard(intern);
    checkComplete();
  });
}

function createHTML(cards) {
  let html = `
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="UTF-8" />
          <title>Dev Team Page</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
          <link rel="stylesheet" href="../css/style.css">
      </head>
      <body>
        <header><h1>My Team</h1></header>
        <flexbox>
          ${cards}
        </flexbox>  
          <script src="index.js"></script>
      </body>
  </html>`;

  fs.writeFile("myTeam.html", html, (err) =>
    err ? console.error(err) : console.log("")
  );
}

init();
