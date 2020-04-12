// add npm package inquirer
const inquirer = require("inquirer");

// add developer modules
var Employee = require("./lib/Employee.js");
var Engineer = require("./lib/Engineer.js");

// questions to prompt
const questions = [
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

  // prompt for questions
  inquirer
    .prompt(questions)
    .then (function(response){
        console.log(response)

        
        var employee = new Employee(response)
        console.log(employee)
        var engineer = new Engineer(response)
        console.log(engineer)
    });  
}

init();