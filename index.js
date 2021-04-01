const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

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

const allCards = []
let card

function renderCards (group) {
  group.forEach(member => {
    let role = member.getRole()
    switch (role) {
      case 'Manager':
        card = `<div class="card m-3">
            <h5 class="card-header custom-card-head">${member.name}</h5>
            <div class="card-body custom-card-bod">
            <h5 class="card-title"><i class="far fa-clipboard"></i> Manager</h5>
            <p class="card-text">
            <ul class="list-group">
            <li class="list-group-item">Employee ID: ${member.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
            <li class="list-group-item">Office Number: ${member.officeNumber}</li>
            </ul></p>
            </div>
            </div>`
        break
      case 'Engineer':
        card = `<div class="card m-3">
            <h5 class="card-header custom-card-head">${member.name}</h5>
            <div class="card-body custom-card-bod">
            <h5 class="card-title"><i class="fas fa-laptop-code"></i> Engineer</h5>
            <p class="card-text">
            <ul class="list-group">
            <li class="list-group-item">Employee ID: ${member.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
            <li class="list-group-item">GithHub: <a href="https://github.com/${member.github}" target=_blank>${member.github}</a></li>
            </ul></p>
            </div>
            </div>`
        break
      case 'Intern':
        card = `<div class="card m-3">
                <h5 class="card-header custom-card-head">${member.name}</h5>
                <div class="card-body custom-card-bod">
                <h5 class="card-title"><i class="fas fa-graduation-cap"></i> Intern</h5>
                <p class="card-text">
                <ul class="list-group">
                <li class="list-group-item">Employee ID: ${member.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                <li class="list-group-item">School: ${member.school}</li>
                </ul></p>
                </div>
                </div>`
        break
      default:
        break
    }
    allCards.push(card)
  })
}

function makePage () {
  renderCards(team);
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team Profiles</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />    
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div class="jumbotron custom-jumbo">
        <div class="container-fluid text-center">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>
<div class="card-group">
${allCards}
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"></script>
</body>

</html>`
}