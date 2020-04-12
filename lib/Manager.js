var Employee = require("./Employee.js");

// create class Manager
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        // Manager inherits officeNumber property
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

module.exports=Manager;