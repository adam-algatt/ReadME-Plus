const createMD = require('./createMD');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

function askQuestions() {
  inquirer.prompt(
      [{
          type: 'input',
          name: 'projectName',
          message: 'What is the name of your project? (Required)',
          validate: nameInput => {
            return (nameInput ? true : false);
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please enter a description for your project readme. (Required)',
          validate: descriptionInput => {
            return (descriptionInput ? true : false);
          }
        }
      ]
    )
    .then(inquirerResponses => {
      // console.log(inquirerResponses, typeof (inquirerResponses));
      console.log('Loading ReadMe...');
      // sending destructured array values 
    createMD({ ...inquirerResponses });
      // console.log(responses, typeof(responses));
      //  return fs.writeFileSync(path.join(process.cwd(), 'Generated-ReadME', `${data.projectName}-ReadME.md`), responses); 
    })
};

module.exports = askQuestions;