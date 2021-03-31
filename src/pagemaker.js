const allCards = []
let card

function renderCards (team) {
  team.forEach(member => {
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
                                <li class="list-group-item">Office Number: ${member.office}</li>
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
    allCards.push(card);
  })
}

function makePage(){ 
return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
<div class="container-fluid">
${allCards}
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"></script>
</body>

</html>`}

module.exports = renderCards, makePage;