// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateMarkdown');
const fs = require("fs");
console.log("Welcome to my README generator.")
console.log("Answer the following questions to create your README file")
console.log("==========================================================")


// TODO: Create an array of questions for user input
const questions = [
    // name of project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title to continue!');
                return false;
            }
        }
    },
    // description of project
    {
        type: 'input',
        name: 'description',
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide (Required):

        - What was your motivation?
        - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
        - What problem does it solve?
        - What did you learn? `,
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a project description!');
                return false;
            }
        }
    },
    // installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions on how to install your project (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation info to continue!');
                return false;
            }
        }
    },
    // usage information
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide information on how to use this project!');
                return false;
            }
        }
    },
    // contribution guidlines
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide information on how to contribute to the project!');
                return false;
            }
        }
    },
    // test instructions 
    {
        type: 'input',
        name: 'testing',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here. (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please describe how to test this project!');
                return false;
            }
        }
    },
    // license options
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project (Required)',
        choices: ['Apache 2.0', 'MIT', 'Mozilla-Public 2.0', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('Please pick a license for the project!');
                return false;
            }
        }
    },
    // GitHub username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    // email address
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
    },
];

// TODO: Create a function to write README file
const writeFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return (err)
        } else {
            console.log("README file successfully generated!")
        };
    });
};

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then(userInput => {
        console.log(userInput);
        // return;
        writeFile("GeneratedREADME.md", generateMarkdown(userInput))
    });
};

// Function call to initialize app
init();


