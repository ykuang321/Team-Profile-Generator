// import class & modules
const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./dist/generateHTML');

// define variables
const fileName = './dist/index.html';
let teamMembers = [];

// series of questions
const question = {

  Manager: [
    {
      type: "input",
      name: "name",
      message: `What is the Manager's name?`,
    },
    {
      type: "input",
      name: "id",
      message: `What is the Manager's id?`,
    },
    {
      type: "input",
      name: "email",
      message: `What is the Manager's email?`,
    },
    {
      type: "input",
      name: "officeNumber",
      message: `What is the Manager's office number?`,
    }
  ],

  Engineer: [
    {
      type: "input",
      name: "name",
      message: `What is the Engineer's name?`,
    },
    {
      type: "input",
      name: "id",
      message: `What is the Engineer's id?`,
    },
    {
      type: "input",
      name: "email",
      message: `What is the Engineer's email?`,
    },
    {
      type: "input",
      name: "github",
      message: `What is the Engineer's Github name?`,
    }
  ],

  Intern: [
    {
      type: "input",
      name: "name",
      message: `What is the Intern's name?`,
    },
    {
      type: "input",
      name: "id",
      message: `What is the Intern's id?`,
    },
    {
      type: "input",
      name: "email",
      message: `What is the Intern's email?`,
    },
    {
      type: "input",
      name: "school",
      message: `What is the Intern's school name?`,
    }
  ],
  
}

// build manager's profile
function buildManagerProfile(){

  inquirer
  .prompt(question.Manager)
  .then((data) => {

    const manager = new Manager (data.name, data.id, data.email, data.officeNumber)
    teamMembers.push(manager);
    nextMember();

  })
}

// build engineer's profile
function buildEngineerProfile(){

  inquirer
  .prompt(question.Engineer)
  .then((data) => {

    const engineer = new Engineer (data.name, data.id, data.email, data.github)
    teamMembers.push(engineer);
    nextMember();

  })
}

// build intern's profile
function buildInternProfile(){

  inquirer
  .prompt(question.Intern)
  .then((data) => {

    const intern = new Intern (data.name, data.id, data.email, data.school)
    teamMembers.push(intern);
    nextMember();

  })
}

// ask user to select the next team member's type for adding
const nextMember = () => {
  inquirer
  .prompt([
    {
      type: "list",
      name: "type",
      message: "Which type of team member would you like to add?",
      choices: ['Engineer','Intern', 'I am done with adding more members']
    }
  ])
  .then(val => {
    if (val.type == "Engineer"){
      buildEngineerProfile();
    }
    else if (val.type == "Intern"){
      buildInternProfile();
    }
    else {
     writeFile();
    }
  });
}

// function to write to html file
function writeFile(){

  fs.writeFile(fileName, generateHTML(teamMembers), (err) =>
  err ? console.log(err) : console.log("Completed") 
)
  
}

// start the application by prompting the user to build manager's profile
buildManagerProfile();
