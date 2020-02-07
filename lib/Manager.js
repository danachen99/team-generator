const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNum = officeNumber;
        this.role = "Manager";
    }

    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNum;
    }
}

module.exports = Manager;