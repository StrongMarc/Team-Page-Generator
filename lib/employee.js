const inquirer = require("inquirer");

const questions = [
    {
      type: "input",
      message: "What is your first name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your last name?",
      name: "lastname",
    },
    {
      type: "input",
      message: "What is your ID#?",
      name: "id",
    },   
];


function init(){

    function Employee(response){
        this.name = response.name;
        this.lastname = response.lastname;
        this.id = response.id;
    }

    inquirer
        .prompt(questions)
        .then (function(response){
            console.log(response)

            
            var employee = new Employee(response)
            console.log(employee)
        });
    
    

}


init();