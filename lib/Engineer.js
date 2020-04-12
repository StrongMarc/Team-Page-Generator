// create class Employee
var Employee = require("./Employee.js");

class Engineer extends Employee{
    constructor(options){
        super(options)
        this.gitHub_username = options.gitHub_username;
        console.log("ENG")
    }

    getGithub(){
        return this.gitHub_username;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports=Engineer;