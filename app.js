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
  teamArray = [];  //globalize and variable array
  var i = 0;
  // prompt for initial questions
  inquirer
    .prompt(initialQuestions)
    .then (async function(initial){
      try{
        console.log(initial)

        // for (i=0; i < initial.managerNumber; i++) {
        await managerInput();
        // }
        // while (i < initial.managerNumber){
        //   managerInput();
        //   i++;
        // }
        await engineerInput();

        let filename = "./templates/main.html"
        readMainFile(filename, teamArray, initial);
        
      } catch (err){
          console.log(err)
      }
  })
}

// function to get manager input
async function managerInput(){
  try{
  console.log("Manager Input:")
  //prompt for manager input properties
  let response = await inquirer
    .prompt(managerQuestions)
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
          
          // change %XXX to designated input properties
          newDataStr = updateContent(data, manager)
          teamArray.push(newDataStr)
          console.log(teamArray)
         
        });  // end fs.readFile
      } // end function readFile  
  
  } catch (err){
    console.log(err)
  }
}

// function to get engineer input
async function engineerInput(){
  try{
  console.log("Engineer Input:")
  //prompt for engineer input properties
  let response = await inquirer
    .prompt(engineerQuestions)

      var employee = new Employee(response.name, response.id, response.email)
      var engineer = new Engineer(response.name, response.id, response.email, response.officeNumber)

      let filename = "./templates/engineer.html"
      readFile(filename, engineer)

      // read manager.html
      function readFile(fileName, engineer) {
        // code for reading manager.html file
        fs.readFile(fileName, "utf8", function(error, data) {
          if (error) {
            return console.log(error);
          }
          console.log(`Success read engineer!`);
          
          // change %XXX to designated input properties
          newDataStr = updateContent(data, engineer)
          teamArray.push(newDataStr)
          // console.log(teamArray)
         
        });  // end fs.readFile
      } // end function readFile  
   
  } catch (err){
    console.log(err)
  }
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

function updateMain (data, teamStr, initial){
  console.log(initial)
  console.log(teamStr)
  data = data.replace("%teamcards", teamStr)
  data = data.replace("%teamname", initial.teamName)
      return data;
}

// read main.html and then write 
function readMainFile(fileName, teamArray, initial) {
  // code for reading main.html file
  fs.readFile(fileName, "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    teamStr = teamArray.join();
    newDataStr = updateMain(data, teamStr, initial)

    let filename = "./output/team.html"
    writeToFile(filename, newDataStr)
  });  // end fs.readFile
} // end function readFile  

// write to team.html
function writeToFile(filename, data){
   // code for writing team.html file
  fs.writeFile(filename, data, function(err){
    if(err){
      throw err;
    }
    console.log("Successfuly wrote to team2.html file")
  });
}

init();