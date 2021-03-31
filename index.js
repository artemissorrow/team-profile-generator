const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const makePage = require('./src/pagemaker')

const team = []

function setManager () {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "Please enter the team manager's name:",
        name: 'name'
      },
      {
        type: 'number',
        message: "Please enter the team manager's employee ID number:",
        name: 'id'
      },
      {
        type: 'input',
        message: "Please enter the team manager's email:",
        name: 'email'
      },
      {
        type: 'number',
        message: "Please enter the team manager's office number:",
        name: 'office'
      },
      {
        type: 'list',
        message: 'Please select:',
        choices: ["Enter engineer's info", "Enter intern's info"],
        name: 'menu'
      }
    ])
    .then(answers => {
      let manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      )
      team.push(manager)
      if (answers.menu === "Enter engineer's info") {
        setEngineer()
      } else if (answers.menu === "Enter intern's info") {
        setIntern()
      }
    })
}

function setEngineer () {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "Please enter the engineer's name:",
        name: 'name'
      },
      {
        type: 'number',
        message: "Please enter the engineer's employee ID number:",
        name: 'id'
      },
      {
        type: 'input',
        message: "Please enter the engineer's email:",
        name: 'email'
      },
      {
        type: 'input',
        message: "Please enter the engineer's GitHub username:",
        name: 'github'
      },
      {
        type: 'list',
        message: 'Please select:',
        choices: ["Enter engineer's info", "Enter intern's info", 'Quit'],
        name: 'menu'
      }
    ])
    .then(answers => {
      let engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      )
      team.push(engineer)

      if (answers.menu === "Enter engineer's info") {
        setEngineer()
      } else if (answers.menu === "Enter intern's info") {
        setIntern()
      } else {
        console.log(team)
        const htmlContent = makePage()

    fs.appendFile('index.html', htmlContent, err =>
          err ? console.log(err) : console.log('Success!')
        )
      }
    })
}

function setIntern () {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "Please enter the intern's name:",
        name: 'name'
      },
      {
        type: 'number',
        message: "Please enter the intern's employee ID number:",
        name: 'id'
      },
      {
        type: 'input',
        message: "Please enter the intern's email:",
        name: 'email'
      },
      {
        type: 'input',
        message: "Please enter the intern's school:",
        name: 'school'
      },
      {
        type: 'list',
        message: 'Please select:',
        choices: ["Enter engineer's info", "Enter intern's info", 'Quit'],
        name: 'menu'
      }
    ])
    .then(answers => {
      let intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      )
      team.push(intern)
      if (answers.menu === "Enter engineer's info") {
        setEngineer()
      } else if (answers.menu === "Enter intern's info") {
        setIntern()
      } else {
        console.log(team)
        const htmlContent = makePage()

    fs.appendFile('index.html', htmlContent, err =>
          err ? console.log(err) : console.log('Success!')
        )
      }
    })
}

setManager()
