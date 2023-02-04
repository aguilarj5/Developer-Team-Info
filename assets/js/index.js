const user = require('./class');
const questions = require('./questions');
const fs = require('fs');

function init() {
  const inquirer = require('inquirer');

  inquirer
  .prompt(questions.questions)
  .then((response) =>
    createHTML(response)
  );
}

function createHTML() {

}

init();

