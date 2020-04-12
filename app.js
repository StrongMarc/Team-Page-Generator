// add npm package inquirer
const inquirer = require("inquirer");

// add developer modules
var Employee = require("./lib/Employee.js");
var Manager = require("./lib/Manager.js");
var Engineer = require("./lib/Engineer.js");
var Intern = require("./lib/Intern.js");

// questions to prompt
const initialQuestions = [
  {
    type: "input",
    message: "What is the team name?",
    name: "teamName",
  },
  {
    type: "input",
    message: "How many managers are leading the team?",
    name: "managerNumber",
  },
  {
    type: "input",
    message: "How many engineers are on the team?",
    name: "engineerNumber",
  },   
  {
    type: "input",
    message: "How many interns are on the team?",
    name: "internNumber",
  },   
];

const baseQuestions = [
    {
      type: "input",
      message: "What is the name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the ID#?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the email?",
      name: "email",
    },   
];

function init(){

  // prompt for initial questions
  // inquirer
  //   .prompt(initialQuestions)
  //   .then (function(initial){
  //     console.log(initial)

      // prompt for base questions
      inquirer
        .prompt(baseQuestions)
        .then (function(response){
            console.log(response)

            
            var employee = new Employee(response)
            console.log(employee)
            var manager = new Manager(response)
            console.log(manager)
            var engineer = new Engineer(response)
            console.log(engineer)
            var intern = new Intern(response)
            console.log(intern)
    
        });  
}

init();