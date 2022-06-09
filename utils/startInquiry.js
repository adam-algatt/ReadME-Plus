const createMD = require('./createMD');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

function askQuestions() {
  inquirer.prompt(
      [
        // {
        //   type: 'input',
        //   name: 'account',
        // message: 'What is your github username? (Required)',
        //   validate: accountInput => {
        //    return (accountInput ? true : "github account is required")
        //   }
        //   },
        //   {
        //     type: 'input',
        //     name: 'email',
        //     message: 'What is your email address? (Required)',
        //     validate: emailInput => {
        //       validEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
        //       return (validEmail ? true : 'Please enter a valid email address.');
        //     }
        //   },
        // {
        //   type: 'input',
        //   name: 'projectName',
        //   message: 'What is the name of your project? (Required)',
        //   validate: nameInput => {
        //     return (nameInput ? true : 'Please enter a name for your project');
        //   }
        // },
        // {
        //   type: 'input',
        //   name: 'description',
        //   message: 'Please enter a description for your project readme. (Required)',
        //   validate: descriptionInput => {
        //     return (descriptionInput ? true : 'Please enter a project description');
        //   }
        // },
        {
          type: 'input',
          name: 'deployment',
          message: 'Enter instructions needed to run program on for first time use. \n if nothing is entered npm i and npm start will be entered',
        },
        // {
        //   type: 'input',
        //   name: 'usage',
        //   message: 'Does the user need to know anything before using the repo?'
        // },
        // {
        //   type: 'input',
        //   name: 'contributers',
        //   message: 'How can a user contribute to the repo?'
        // },
      ]
    )
    .then(inquirerResponses => {
    createMD({ ...inquirerResponses });
    })
};

module.exports = askQuestions;