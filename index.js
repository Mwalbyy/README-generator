const fs = require("fs")
const inquirer = require("inquirer")



const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What would you like your README title to be?",
    },
    {
      type: "checkbox",
      name: "license",
      message: "What license are you using?",
      choices: ["MIT", "NTP", "ISC"],
    },
    {
      type: "input",
      name: "description",
      message: "Give a description for your README",
    },
    {
      type: "input",
      name: "installation",
      message: "Provide installation instructions for the user",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide usage information",
    },
    {
      type: "input",
      name: "contribution",
      message: "Provide information on contribution guidelines",
    },
    {
      type: "input",
      name: "test",
      message: "Provide test instructions",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub user name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    
  ])
};

const generateReadMe = ({
  title,
  license,
  description,
  installation,
  usage,
  contribution,
  test,
  github,
  email
}) => 
  `
# ${title}

![License](https://img.shields.io/badge/Licensed%20Under-${license}-blue)

# Description
${description}
# Table of Contents

-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-[Tests](#tests)
-[Questions](#questions)

<a href = 'installation'></a>

# Installation:
${installation}
<a href = 'usage'></a>

# Usage:
${usage}
<a href = 'license'></a>

# License:
[Link to ${license}](https://opensource.org/licenses/${license})

<a href = 'contributing'></a>

# Contributing:
${contribution}

<a href = 'tests'></a>

# Tests:
${test}

<a href = 'questions'></a>

# Questions:

[![Link to github](https://img.shields.io/badge/GitHub-yellow)](https://github.com/${github})

[![Email](https://img.shields.io/badge/Email-yellow)](mailto:${email})

`;
const init = () => {
  promptUser().then((answers) =>
    fs.writeFileSync(`NEWREADME.md`, generateReadMe(answers)),

    );
};
init();

