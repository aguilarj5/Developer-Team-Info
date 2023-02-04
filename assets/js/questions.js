const questions = [
    {
      type: 'input',
      message: 'Project Title:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation Instructions:',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Usage Information:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Contribution Guidelines:',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Test Instructions:',
      name: 'test',
    },
    {
      type: 'list',
      name: 'license',
      message: 'License Type:',
      choices: ['Apache', 'GNU', 'MIT'],
    },
    {
      type: 'input',
      message: 'GitHub Username:',
      name: 'gitUser',
    },
    {
      type: 'input',
      message: 'Email:',
      name: 'email',
    }
  ];

  module.exports = {
    questions
  };