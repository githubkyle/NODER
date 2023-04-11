// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const First = "MIT";
const Second = "GPL-v3";
const Third = "Perl";
const GM = require("./utils/generateMarkdown.js");
// TODO: Include packages needed for this application== npm i
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create an array of questions for user input
const questions = [];
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of the app?",
      name: "Title"
    },
    {
      type: "input",
      message: "What is the description?",
      name: "Description"
    },
    {
      type: "input",
      message: "How do we install the app?",
      name: "Installation"
    },
    {
      type: "input",
      message: "How do we use the app?",
      name: "Usage"
    },
    {
      type: "rawlist",
      name: "License",
      message: "What license does this app have?",
      choices: [First, Second, Third]
    },
    {
      type: "input",
      message: "Who is responsible for contributing to this app?",
      name: "Contributing"
    },
    {
      type: "input",
      message: "What tests do you have for it?",
      name: "Tests"
    },
    {
      type: "input",
      message: "What is your e-mail address?",
      name: "Email"
    },
    {
      type: "input",
      message: "What is your Github profile name?",
      name: "Github"
    }
  ]);
};
const generateREADME = ({
  Title,
  Description,
  Installation,
  Usage,
  License,
  Contributing,
  Tests,
  Email,
  Github
}) =>
  `## Title

  This project is titled ${Title}

  ${GM.renderLicenseBadge(License)}
  
  ## Description

  ${Description}

  ## Table of Contents

  [Go to Installation section](#installation)

  [Go to Usage section](#usage)

  [Go to Credits section](#credits)

  [Go to License section](#license)

  [Go to Tests section](#tests)

  [Go to Questions section](#questions)
  
## Installation

${Installation}

## Usage

${Usage}

## Credits

${Contributing}

## License

${License}

${GM.renderLicenseLink()}
${GM.renderLicenseLink2()}

## Tests 

${Tests}

## Questions

You can reach me at ${Email} with any additional questions.

My Github profile is named ${Github}, reachable at https://www.github.com/${Github}`;

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then(answers =>
      fs.writeFile("README.md", generateREADME(answers), err => {
        if (err) {
          console.log(err);
        }
      })
    )
    .then(() => console.log("Successfully wrote to README.md"))
    .catch(err => console.error(err));
};

// Function call to initialize app
init();
