const teamMember = require("./class");

function createManagerCard(manager) {
  let managerCard = `
          <div class="card" style="width: 18rem;">
              <div class="card-body">
              <h5 class="card-title">${manager.getName()}</h5>
              <h4 class="card-title">${manager.getRole()}</h5>
              <p class="card-text">ID: ${manager.getId()}</p>
              <a href="mailto: ${manager.getEmail()}" class="btn btn-primary">E-mail</a>
              <p class="card-text">Office Number: ${manager.getOffice()}</p>
              </div>
          </div>
          `;
  return managerCard;
}

function createEngineerCard(engineer) {
  let engineerCard = `
          <div class="card" style="width: 18rem;">
              <div class="card-body">
              <h5 class="card-title">${engineer.getName()}</h5>
              <h4 class="card-title">${engineer.getRole()}</h5>
              <p class="card-text">ID: ${engineer.getId()}</p>
              <a href="mailto: ${engineer.getEmail()}" class="btn btn-primary">E-mail</a>
              <p class="card-text">GitHub Username: ${engineer.getGithub()}</p>
              </div>
          </div>
          `;
  return engineerCard;
}

function createInternCard(intern) {
  let internCard = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${intern.getName()}</h5>
                <h4 class="card-title">${intern.getRole()}</h5>
                <p class="card-text">ID: ${intern.getId()}</p>
                <a href="mailto: ${intern.getEmail()}" class="btn btn-primary">E-mail</a>
                <p class="card-text">School: ${intern.getSchool()}</p>
                </div>
            </div>
            `;
  return internCard;
}

module.exports = {
  createEngineerCard,
  createInternCard,
  createManagerCard,
};
