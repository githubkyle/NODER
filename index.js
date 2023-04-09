// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
      type: "input",
      message: "What license does this app have?",
      name: "License"
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
  `## Description

  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  
  - What was your motivation?
  - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
  - What problem does it solve?
  - What did you learn?
  
  ## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an FILLER folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    `````` // ![alt text](assets/images/screenshot.png)

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.writeFile("README.md", READMEContent, err =>
  err ? console.log(err) : console.log("Successfully created README.md!")
);
// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then(answers => writeFile("README.md", generateREADME(answers)))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch(err => console.error(err));
};

// Function call to initialize app
init();
