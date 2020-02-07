const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

class Manager {
    constructor() {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
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