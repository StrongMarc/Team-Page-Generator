var Employee = require("./Employee.js");

// create class Manager
class Manager extends Employee{
    constructor(options){
        super(options)
        // Manager inherits officeNumber property
        this.officeNumber = options.officeNumber;
        console.log("MAN")
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

module.exports=Manager;