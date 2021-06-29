const inquirer = require('inquirer');
const fs = require('fs');
const axios = require("axios");
const util = require('util');
const produceMarkdown = require('./produceMarkdown.js');

// data of userInputs
const mdBody = [
    {
        type: 'input',
        message: 'What is your project Title?',
        name: 'title',     
    },
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'repoUserName',
      default: 'Errollinsjr',  
      validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Valid gitHub username required");
        }
        return true;
      }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'Simple-Readme-Generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Valid gitHub repo required for badge");
            }
            return true;
        }
    },
    {
     type: 'input',
     message: 'What is your email?',
     name: 'email',     
    },
    {
      type: 'input',
      message: 'Describe your project',
      name: 'description',     
    },
    {
      type: 'input',
      message: 'Is there any specific installation guidelines or steps needed for this project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How is your project used?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What license is this?',
      choices: ['GNUAGPLv3', 'GNUGPLv3', 'GNULGPLv3', 'MozillaPublicLicense2.0', 'ApacheLicense2.0', 'MITLicense', 'BoostSoftwareLicense 1.0', 'TheUnlicense'],
      name: 'licenses',
    },
    {
      type: 'input',
      message: 'If possible, how can others contribute to your project?',
      name: 'contributing',
    }, 
    {
      type: 'input',
      message: 'If needed, provide tests written for your application or how to run them',
      name: 'test',
    }
];

// takes in the name of file and data of mdBody above
function initWriteFile (nameOfFile, data) {
    fs.writeFile(nameOfFile, data, error => {
        if (error) {
            return console.log(error)
        }
        console.log("README.md successfully created")
    });                  
}

// conversion of a function that accepts a callback into a function returning a promise
const writeFileAsync = util.promisify(initWriteFile);

// async init
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponse = await inquirer.prompt(mdBody);
        console.log("Your responses: ", userResponse);
        console.log("Fetching your GitHub data next...");
    
        // Call GitHub api for user info
        const userInfo = await api.getUser(userResponse);
        console.log("Your gitHub user info: ", userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo
        console.log("Generating your README next...")
        const md = produceMarkdown(userResponse, userInfo);
        console.log(md);
    
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', md);

    } 
    catch (error) {
        console.log(error);
    }
};

init ();

const api = {
    async getUser(userResponses) {
      try { 
          let response = await axios
          
        // Sample URL: https://api.github.com/users/errollinsjr
          .get(`https://api.github.com/users/${userResponses.repoUserName}`);
          return response.data;
  
        } 
      catch (error) {
          console.log(error);
        }
    }
};
