var Employee = require("./Employee.js");

// create class Engineer
class Engineer extends Employee{
    constructor(options){
        super(options)
        // Engineer inherits gitHub_username property
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