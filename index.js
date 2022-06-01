const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/ReadMe');
const ReadMe = require('./utils/ReadMe');


const questions = () => {
  return inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a name for your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project readme. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Enter a description!');
            return false;
          }
        }
      }
    ])
}

// Function Generates ReadMe.md after user answers inquirer prompts
  async function createMarkdown() {
    const arr = [];
    const answers = await questions();
    arr.push(answers);
    const readMe = ReadMe.inject(arr);
  
    console.log(arr);
// fs.writeFile('Develop\src\README.md', ReadMe , err => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('README Generated!');
//     }
//   })
};

createMarkdown();

