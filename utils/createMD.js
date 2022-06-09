const path = require('path');
const fs = require('fs');

function generateMarkdown(data) {
   const codeSnippet = String.fromCharCode(96);
    let responses =
        `
// # ${data.projectName}

// ## ${data.description}

These instructions will get you a copy of the project up and running on your 
local machine for development and testing purposes. See deployment for notes 
on how to deploy the project on a live system.

### Table of Contents
[Handlebars templates](http://handlebarsjs.com/)

- [Github Account](${data.account})
- [Repo Contanct Email](${data.email})
- [Github Account](${data.projectName})
- [Github Account](${data.account})
- [Github Account](${data.account})
- [Github Account](${data.account})
- [Github Account](${data.account})
- [Github Account](${data.account})



Give examples


### Installation

Run the following commands while in the local repository:

${data.deployment ? data.deployment : '- npm i \n - npm start'}

## Usage

Explain how to run the automated tests for this system

### Contributing

Explain what these tests test and why

Give an example


### Tests

Explain what these tests test and why


Give an example


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
`;
    return fs.writeFileSync(path.join(process.cwd(), 'Generated-ReadME', `${data.projectName}-ReadME.md`), responses);

}


module.exports = generateMarkdown;