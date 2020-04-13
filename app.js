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
    inquirer
      .prompt(initialQuestions)
      .then (function(initial){
        console.log(initial)
        console.log(initial.managerNumber-1)
        // for (i=0; i < initial.managerNumber-1; i++) {
          console.log("Manager Input:")
          inquirer
            .prompt(baseQuestions)
            .then (function(response){
              var employee = new Employee(response.name, response.id, response.email)
              var manager = new Manager(response.name, response.id, response.email, 3)
              console.log(manager.officeNumber)

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
                  console.log(data)
                  //https://www.w3schools.com/jsref/jsref_replace.asp
                 
                  newDataStr = updateContent(data, manager)
                  console.log(newDataStr)
                  // fs.writeFile("./output/team2.html", data, function(err){
                  //   if(err){
                  //     throw err;
                  //   }
                  //   console.log("Successfuly wrote to team2.html file")
                  // });
                });  // end fs.readFile
              } // end function readFile  
            })
        // }
        // prompt for base questions
        // inquirer
        //   .prompt(baseQuestions)
        //   .then (function(response){
        //       console.log(response)

              
        //       var employee = new Employee(response)
        //       console.log(employee)
        //       var manager = new Manager(response)
        //       console.log(manager)
        //       var engineer = new Engineer(response)
        //       console.log(engineer)
        //       var intern = new Intern(response)
        //       console.log(intern)
      
        //   });  
      //   });  
        //   });  

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


init();

function updateContent (data, role){
  console.log(data)
  percentName = data.replace("%Name", role.name)
  percentId = percentName.replace("%id", role.id)
  percentEmail = percentId.replace("%email", role.email)
  percentRole = percentEmail.replace("%Role", role.getRole)
  switch (role.getRole()) {

    case "Manager":
      percentOffice = percentRole.replace("%officeNumber", role.officeNumber)
      console.log(percentOffice)
      return percentOffice;
      break;
   
    }

}