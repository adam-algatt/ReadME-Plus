const path = require('path');
const fs = require('fs');
let keys = []; 

function generateMarkdown(data) {
  let codeSnippet = '\`\`\`';
    let responses =
        `
${data.license !== 'None' && data.license !== undefined ? `[![License: ${data.license}](https://img.shields.io/badge/license-${data.license}-green.svg)](https://opensource.org/licenses/${data.license})` : ''}
 # ${data.projectName}
 
 ## Description

 ${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${data.license !== 'None' ? `\n* [License](#license)\n` : ''}
* [Tests](#tests)
${data.contributing  ? `\n* [Contributing](#contributing)\n` : ''}
* [Questions](#questions)
${data.acknowledgements ? `\n* [Acknowledgments](#acknowledgments)` : ''}


## Installation

Run the following command to install dependencies:

${codeSnippet} 

${data.deployment}

${codeSnippet}

## Usage 

${data.usage} 
${data.license ? `\n## License\n\n This project is licensed under the ${data.license} license\n` : ''}
## Tests 

${data.test}

${codeSnippet}
${data.testCommand}
${codeSnippet}
${data.contributing ? `\n## Contributing\n\n ${data.contributing}\n` : ''}
${data.acknowledgements ? `\n## Acknowledgments\n\n ${data.acknowledgements}` : ''}

## Questions

Please direct any questions you have regarding this repo to: 
[${data.email}](mailto:${data.email}) 

To see more of my repositories visit my github at: \n\n [https://github.com/${data.account}](https://github.com/${data.account})&nbsp;&nbsp;&nbsp;&nbsp;
![Alternate image text](https://cdn-icons-png.flaticon.com/64/25/25231.png)
`;
    return fs.writeFileSync(path.join(process.cwd(), 'Generated-ReadME', `${data.projectName}-ReadME.md`), responses);

}


module.exports = generateMarkdown;
