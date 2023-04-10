// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const First = "Greatest License ever";
const Second = "Another wonderful license";
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
      message: "What are the table of contents?",
      name: "ToC"
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
      choices: [First, Second]
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
      message: "What questions do you have?",
      name: "Questions"
    }
  ]);
};
const generateREADME = ({
  Title,
  Description,
  ToC,
  Installation,
  Usage,
  License,
  Contributing,
  Tests,
  Questions
}) =>
  `## Title

  ${Title}
  
  ## Description

  ${Description}

  ## Table of Contents

  ${ToC}
  
  ## Installation

  ${Installation}

## Usage

${Usage}

## Credits

${Contributing}

## License

${License}

## Tests 

${Tests}

## Questions

${Questions}`;

// TODO: Create a function to write README file
function writeToFile(generateREADME, answers) {
  fs.writeFile("README.md", generateREADME.toString(), err =>
    err ? console.log(err) : console.log("Successfully created README.md!")
  );
}

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
