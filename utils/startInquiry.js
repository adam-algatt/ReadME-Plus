const createMD = require('./createMD');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Choices = require('inquirer/lib/objects/choices');
const {
  type
} = require('express/lib/response');

function askQuestions() {
  inquirer.prompt(
      [{
          type: 'input',
          name: 'account',
          message: 'What is your github username? (Required)',
          validate: accountInput => {
            return (accountInput ? true : "github account is required")
          }
        },
        {
          type: 'input',
          name: 'email',
          message: 'Please enter a contact email address for this repo? (This will only be used if you fill out the contribution section)',
          validate: emailInput => {
            validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
            return (validEmail ? true : 'Please enter a valid email address.');
          }
        },
        {
          type: 'input',
          name: 'projectName',
          message: 'What is the name of your project? (Required)',
          validate: nameInput => {
            return (nameInput ? true : `Please enter a name for your project ${false}`);
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please enter a description for your project readme. (Required)',
          validate: descriptionInput => {
            return (descriptionInput ? true : `Please enter a project description${false}`);
          }
        },
        {
          type: 'list',
          name: 'license',
          message: 'Select a license type for your project.',
          choices: ['GPL3.0', 'MIT', 'APACHE2.0', 'BSD3', 'None']
        },
        {
          type: 'input',
          name: 'deployment',
          default: 'npm i',
          message: 'Enter instructions needed to install program dependencies\n if nothing is entered npm i will be entered',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Enter a brief summary of how to use this program (required)?',
          validate: usageInput => {
            return (usageInput ? true : `Please enter summary of how to use your program ${false}`);
          }
        },
        {
          type: 'input',
          name: 'test',
          message: 'If your repo has a test function please enter what your tests are testing for.',
          validate: testInput => {
            return (testInput ? true : `Testing information is required ${false}`);
          }
        },
        {
          type: 'input',
          name: 'testCommand',
          default: 'npm run test',
          message: 'Please enter a command to run tests(if nothing is entered npm run test will be added)'
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'How can a user contribute to the repo?'
        },
        {
          type: 'input',
          name: 'acknowledgments',
          message: 'If you would like to add any acknowledgments to your repo, add them here'
        }
      ]
    )
    .then(inquirerResponses => {
      createMD({
        ...inquirerResponses
      });
    })
};

module.exports = askQuestions;