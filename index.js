// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        question: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        question: 'What is the description of your project? (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter the description of your project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        question: 'How do you install the project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter the installation instructions for your project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        question: 'What applications did you use for this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter the usage information for your project!');
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'license',
        question: 'What license did you use for this project? (Check all that apply)',
        choices: ['MIT License', 'GNU', 'Apache']
    },

    {
        type: 'input',
        name: 'contributing',
        question: 'Who contributed to this project? (Required)',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please list contributers!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },

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

    {
        type: 'input',
        name: 'tests',
        message: 'How do you test your application? (Required)',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Test your application!!');
                return false;
            }
        }
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw (err);
            return;
        }
        console.log("Success!")

    });
};

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
        .then(function (data) {
            const readmeContent = generateMarkdown(data)
            writeToFile("README.md", readmeContent)
        })

};

// Function call to initialize app
init();
