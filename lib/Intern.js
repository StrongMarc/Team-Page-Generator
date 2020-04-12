var Employee = require("./Employee.js");

// create class Intern
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        // Intern inherits school property
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports=Intern;