// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// import inquirer from "inquirer";

var generateMarkdown = require(`./utils/generateMarkdown`);
// import generateMarkdown from './utils/generateMarkdown';

const fs = require('fs');
// import fs from "fs";

// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const questions = [
    {
        type: 'input', 
        name: 'fullName',
        message: "Welcome to the README generator. To start, enter your full name: ",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your full name.');
                return false;
            }
        }         
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter your Github username: ",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your email: ",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: "Enter your project title: "
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter your project description: "
    },
    {
        type: 'input',
        name: 'install',
        message: "Enter instructions for installation: "
    },
    {
        type: 'input',
        name: 'usage',
        message: "Enter instructions for project usage: "
    },
    {
        type: 'list',
        name: 'license',
        choices: ['None','MIT', 'GPLv3', 'CC0_1.0']
    },
    {
        type: 'input',
        name: 'contribute',
        message: "Enter how can others contribute to this project: "
    },
    {
        type: 'input',
        name: 'tests',
        message: "Enter the tests written for your application: "
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeREADME(fileName, data, error => {
        if (error) {
            throw error;
    } else console.log('README has been created. Navigate to readmes folder to find your README file')
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(answers) {
        console.log(answers);

        let result = generateMarkdown(answers)
        console.log(result);

        const readmeInput = generateMarkdown(answers);
        fs.writeFile('./readmes/README.md', readmeInput, (err) =>
            err ? console.log(err) : console.log("README has been created. Navigate to readmes folder to find your README file.")
        )

    })
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(readmeInput => {
        return writeToFile(readmeInput);
    })
    .catch(function(error){
        console.log(error);
    })

}



// Function call to initialize app
init();

