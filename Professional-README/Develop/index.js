// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require('./utils/generateMarkdown');


const promptUser = [
    
        //Project Name
        {
            type: "input",
            name: "title",
            message: "Enter Project Title",
        },
        
        //Description
        {
            type: "input",
            name: "description",
            message: "Enter Project Description",
        },
        
        //Install
        {
            type: "input",
            name: "installation",
            message: "Enter Project Installation Instructions",
        },
        
        //usage info
        {
            type: "input",
            name: "usage",
            message: "Enter Usage Information",
        },
        
        //contribution guidelines
        {
            type: "input",
            name: "contribution",
            message: "Enter Your Projects Contribution Guidelines",
        },
        
        //test instructions
        {
            type: "input",
            name: "test",
            message: "Enter Test Instructions",
        },
        
        //github username
        {
            type: "input",
            name: "username",
            message: "Enter Github Username",
            
        },
        
        //e-mail address
        {
            type: "input",
            name: "email",
            message: "Enter Email Address",
             
        },
        
        //liscensing options
        {
            type: "checkbox",
            message: "Licensing Options",
            name: "license",
            choices: [
                "MIT" ,
                "Apache2.0",
                "GNU Public v3.0",
            ]
        }
        
]            
   
    


// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptUser).then((data) => {
        fs.writeFile('Profile.md', generateMarkdown(data),(err) => err? console.error(err) : console.log("Success!"))})
    }
 
 

// Function call to initialize app
init();
