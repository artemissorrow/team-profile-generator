const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt(
        [
            {
                type: "input",
                message: "Please enter the team manager's name:",
                name: "manageName",
            },
            {
                type: "number",
                message: "Please enter the team manager's employee ID number:",
                name: "manageId",
            },
            {
                type: "input",
                message: "Please enter the team manager's email:",
                name: "manageEmail",
            },
            {
                type: "number",
                message: "Please enter the team manager's office number:",
                name: "manageOffice",
            },
            {
                type: "list",
                message: "Please select:",
                choices: ["Enter engineer's info", "Enter intern's info", "Quit"],
                name: "menu"
            }
        ]
    ).then((answers) => {
        console.log(answers);
    });


const engQuest = [
    {
        type: "input",
        message: "Please enter the engineer's name:",
        name: "engName",
    },
    {
        type: "number",
        message: "Please enter the engineer's employee ID number:",
        name: "engId",
    },
    {
        type: "input",
        message: "Please enter the engineer's email:",
        name: "engEmail",
    },
    {
        type: "input",
        message: "Please enter the engineer's GitHub username:",
        name: "engGit",
    }
]

const intQuest = [
    {
        type: "input",
        message: "Please enter the intern's name:",
        name: "intName",
    },
    {
        type: "number",
        message: "Please enter the intern's employee ID number:",
        name: "intId",
    },
    {
        type: "input",
        message: "Please enter the intern's email:",
        name: "intEmail",
    },
    {
        type: "input",
        message: "Please enter the intern's school:",
        name: "intSchool",
    }
]