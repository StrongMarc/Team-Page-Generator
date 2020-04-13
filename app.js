// add npm package inquirer
const inquirer = require("inquirer");
const fs = require("fs");

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

const managerQuestions = [
    {
      type: "input",
      message: "What is the manager name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the manager ID#?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the manager email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the manager office number?",
      name: "officeNumber",
    },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineer ID#?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the engineer email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the engineer GitHub Username?",
    name: "officeNumber",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the intern name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the intern ID#?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the intern email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the intern school?",
    name: "officeNumber",
  },
];

function init(){
  strArray = [];  //globalize and variable array
  // prompt for initial questions
    inquirer
      .prompt(initialQuestions)
      .then (function(initial){
        console.log(initial)
        // for (i=0; i < initial.managerNumber-1; i++) {
         managerInput();
        // }

    var array = "";
    let filename = "./templates/main.html"
    readFile(filename)

    // read main.html
    function readFile(fileName) {
      // code for reading main.html file
      fs.readFile(fileName, "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        // console.log(`Success read!`);

        fs.writeFile("./output/team.html", data, function(err){
          if(err){
            throw err;
          }
          // console.log("Successfuly wrote to team2.html file")
        });
      });  // end fs.readFile
    } // end function readFile  
  })
}

function managerInput(){
  console.log("Manager Input:")
  inquirer
    .prompt(managerQuestions)
    .then (function(response){
      var employee = new Employee(response.name, response.id, response.email)
      var manager = new Manager(response.name, response.id, response.email, response.officeNumber)

      let filename = "./templates/manager.html"
      readFile(filename, manager)

      // read manager.html
      function readFile(fileName, manager) {
        // code for reading manager.html file
        fs.readFile(fileName, "utf8", function(error, data) {
          if (error) {
            return console.log(error);
          }
          console.log(`Success read manager!`);
          
          newDataStr = updateContent(data, manager)
          strArray.push(newDataStr)
          console.log(strArray)
          // fs.writeFile("./output/team2.html", data, function(err){
          //   if(err){
          //     throw err;
          //   }
          //   console.log("Successfuly wrote to team2.html file")
          // });
        });  // end fs.readFile
      } // end function readFile  
    })
}

//https://www.w3schools.com/jsref/jsref_replace.asp, replace text with role.property
function updateContent (data, role){
  data = data.replace("%Name", role.name)
  data = data.replace("%id", role.id)
  data = data.replace("%email", role.email)
  data = data.replace("%Role", role.getRole)
  switch (role.getRole()) {

    case "Manager":
      data = data.replace("%officeNumber", role.officeNumber)
      return data;
      break;
    
    case "Engineer":
      data = data.replace("%github", role.github)
      return data;
      break;
    
    case "Intern":
      data = data.replace("%school", role.school)
      return data;
      break;
    }

}


init();