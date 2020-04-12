var Employee = require("./Employee.js");

// create class Intern
class Intern extends Employee{
    constructor(options){
        super(options)
        // Intern inherits school property
        this.school = options.school;
        console.log("INT")
    }

    getGithub(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports=Intern;