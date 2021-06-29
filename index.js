const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your application repository name?',
      name: 'repo',
    },
    {
      type: 'input',
      message: 'What is the description of the project?',
      name: 'description',
      
    },
    {
      type: 'input',
      message: 'Please craft your table of contents',
      name: 'Table of Contents',
    },
    {
        type: 'input',
        message: 'What is your installation?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'What is the usage?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'What license is this?',
        name: 'License',
    },
    {
        type: 'input',
        message: 'Contributions?',
        name: 'Contributing',
    }, 
    {
        type: 'input',
        message: 'What does this application test?',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'Enter any questions for the question section',
        name: 'Questions',
    }, 
  ])
  
  
 

  
