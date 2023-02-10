const managerQuestions = [
    {
      type: 'input',
      message: `Team Manager's name:`,
      name: 'managerName',
    },
    {
      type: 'input',
      message: 'Id:',
      name: 'managerId',
    },
    {
      type: 'input',
      message: 'Email:',
      name: 'managerEmail',
    },
    {
      type: 'input',
      message: 'Office Number:',
      name: 'managerOffice',
    },
];

const checkComplete = [
    {
      type: 'list',
      name: 'done',
      message: 'Is team complete?',
      choices: ['Yes', 'No'],
    },
];

const engineerQuestions = [
  {
    type: 'input',
    message: `Engineer's name:`,
    name: 'engineerName',
  },
  {
    type: 'input',
    message: 'Id:',
    name: 'engineerId',
  },
  {
    type: 'input',
    message: 'Email:',
    name: 'engineerEmail',
  },
  {
    type: 'input',
    message: 'GitHub Username:',
    name: 'gitUsername',
  },
];

const checkMember = [
    {
      type: 'list',
      name: 'done',
      message: 'Member Type:',
      choices: ['Engineer', 'Intern'],
    },
];

const internQuestions = [
  {
    type: 'input',
    message: `Intern's name:`,
    name: 'internName',
  },
  {
    type: 'input',
    message: 'Id:',
    name: 'internId',
  },
  {
    type: 'input',
    message: 'Email:',
    name: 'internEmail',
  },
  {
    type: 'input',
    message: 'School Name:',
    name: 'school',
  },
];

module.exports = {
  managerQuestions,
  checkComplete,
  checkMember,
  engineerQuestions,
  internQuestions
};
