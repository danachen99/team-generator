const Employee = require("./lib/Employee");

class Manager extends Employee {
    constructor(officeNum) {
        super(name, id, email, position);
        this.officeNum = officeNum;
    }

    setOffice() {
        return this.officeNum;
    }

    getRole() {
        return this.role;
    }

    getOffice() {
        return this.officeNum;
    }
}

module.exports = Manager;