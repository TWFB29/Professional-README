// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');


// const path = require('path');

// TODO: Create an array of questions for user input
const promptUser = readMeData => {
    console.log(`
   Create a new README.md!
    `);
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter Project Title",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please Enter Title');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Enter Project Description",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please Enter Description');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Enter Project Installation Instructions",
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please Enter Installation Instructions');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Enter Usage Information",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please Enter Usage Information');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contribution",
            message: "Enter Your Projects Contribution Guidelines",
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please Enter Contribution Guidelines');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "test",
            message: "Enter Test Instructions",
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please Enter Test Instructions');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "username",
            message: "Enter Github Username",
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log('Please Enter UserName');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter Email Address",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please Enter Email Address');
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            message: "Licensing Options",
            name: "license",
            choices: [
                "MIT",
                "Apache2.0",
                "GNU Public v3.0"
            ]
        }

    ])
};

// TODO: Create a function to write README file



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
