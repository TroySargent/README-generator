const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
let questions = [{
        type: "input",
        message: "What is this project called?",
        name: "title",
    },
    {
        type: "input",
        message: "Describe what this project does.",
        name: "description",
    },
    {
        type: "input",
        message: "How do you install this project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use this project?",
        name: "usage",
    },
    {
        type: "input",
        message: "Which license does this project use?",
        name: "license",
    },
    {
        type: "input",
        message: "How can others contribute?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What tests does this project use?",
        name: "tests",
    },
    {
        type: "input",
        message: "Where can others reach you for questions?",
        name: "questions",
    },
    {
        type: "confirm",
        message: "Do you want to generate this README?",
        name: "quit"
    }
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        } else {
            console.log("README generated!");
        };
    });
};

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {

            if (answers.quit === true) {
                return writeToFile("README.md", generateMarkdown(answers));
            };
            init(); //recursively loop through questions
        })
        .catch((err) => {
            if (err) {
                throw err;
            };
        });

};

init();