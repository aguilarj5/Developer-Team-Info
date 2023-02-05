const teamMember = require('./class');
const questions = require('./questions');
const fs = require('fs');

function init() {
  const inquirer = require('inquirer');

  inquirer
  .prompt(questions.managerQuestions)
  .then((mng) => {
    let manager = new teamMember.Manager(mng.managerName, mng.managerId, mng.managerEmail, mng.managerOffice);
    createManagerCard(manager);
    checkComplete();
  }
  );
}

function checkComplete() {
  const inquirer = require('inquirer');

  inquirer
  .prompt(questions.checkComplete)
  .then((response) => {
    if(response === 'Yes') {
      return
    } else {
      checkMember();
    }
  }
  );
}

function checkMember() {
  const inquirer = require('inquirer');

  inquirer
  .prompt(questions.checkMember)
  .then((response) => {
    if(response === 'Engineer') {
      createEngineerCard();
    } else {
      createInternCard();
    }
  }
  );
}



function createManagerCard(manager) {
  console.log(manager);
  let managerCard = `
          <div class="card" style="width: 18rem;">
              <img src="$" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">${manager.getName()}</h5>
              <h4 class="card-title">${manager.getRole()}</h5>
              <p class="card-text">ID: ${manager.getId()}</p>
              <a href="$" class="btn btn-primary">E-mail</a>
              </div>
          </div>
          `;

  createHTML(managerCard);
}

function createHTML(managerCard) {
  let html = `
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="UTF-8" />
          <title>title</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      </head>
      <body>
          ${managerCard}
          <script src="index.js"></script>
      </body>
  </html>`;

  
fs.writeFile('temp.html', html, (err) =>
err ? console.error(err) : console.log('Success!')
);

  console.log('hi!');
};

init();

