const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
let questions = [{
        type: "input",
        message: "What is your project name?",
        name: "title",
    },
    {
        type: "input",
        message: "Which license?",
        name: "license",
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username",
    },
    {
        type: "confirm",
        message: "Do you want to quit?",
        name: "quit",
    }
];


// function to write README file
function writeToFile(fileName, data) {

};

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {

            if (answers.quit === true) {
                
            }
            init(); //recursively loop through questions
        })
        .catch((err) => {
            if (err) {
                throw err;
            }
        });

};

init();