// Includes packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username ?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address ?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s name ?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have ?',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies ?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests ?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo ?'
    },
    {
        type: 'confirm',
        name: 'contributing',
        message: 'Would you like to allow people to contribute to this project ?'
    },
    {
        // Additional question about how to contribute, only asked if the user chooses to allow contributions
        when: function(answers) {
            return answers.contributing;
        },
        name: "howToContribute",
        type: "input",
        message: "Please enter a description of how to contribute to this project:"
    }
];

// Function writes README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) => { 
        console.log('README file has been created.');
    });
}

// Function initializes app .... using async/await rather than .then/catch
async function init() {
    const answers = await inquirer.prompt(questions);

    writeToFile('README.md', generateMarkdown(answers));
}

// Function calls to initialize app
init();

