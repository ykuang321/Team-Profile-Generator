let teamProfile = [];

// function to add team profile to html
function createTeamProfile (teamMembers){

  for (let i=0; i<teamMembers.length; i++){
    const employee = teamMembers[i];

    if (employee.getRole() === 'Manager'){
      teamProfile.push(createManagerHTML(employee));
    }
    else if (employee.getRole() === 'Engineer'){
      teamProfile.push(createEngineerHTML(employee));
    }
    else if (employee.getRole() === 'Intern'){
      teamProfile.push(createInternHTML(employee));
    }
  }

return teamProfile.join('');
}

// function to create manager's profile
function createManagerHTML (employee){

  return`
  <div class="card mx-2" style="width: 18rem;">
  <div class="card-header fas fa-coffee">${employee.name}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${employee.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
    <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
  </ul>
  </div>
  `
}

// function to create engineer's profile
function createEngineerHTML (employee){

  return`
  <div class="card mx-2" style="width: 18rem;">
  <div class="card-header fas fa-glasses">${employee.name}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${employee.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
    <li class="list-group-item">Github: <a href="https://github.com/${employee.github}">${employee.github}</a></li>
  </ul>
  </div>
  `
}

// function to create Intern's profile
function createInternHTML (employee){

  return`
  <div class="card mx-2" style="width: 18rem;">
  <div class="card-header fas fa-graduation-cap">${employee.name}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${employee.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
    <li class="list-group-item">School: ${employee.school}</li>
  </ul>
  </div>
  `
}

// function to generate team HTML
function generateHTML (teamMembers){

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />

    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
  </head>

  <body>

    <header class="jumbotron jumbotron-fluid p-3 mb-2 bg-secondary text-white">
      <div class="container">
        <h1 class="display-4 text-center">My Team</h1>
      </div>
    </header>

        <div class="d-flex justify-content-center my-3">
          ${createTeamProfile(teamMembers)}
        </div>
  </body>

  </html>
  `
}

module.exports = generateHTML;
