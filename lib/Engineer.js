var Employee = require("./Employee.js");

// create class Engineer
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        // Engineer inherits gitHub_username property
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports=Engineer;