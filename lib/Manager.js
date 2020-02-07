// const Employee = require("./Employee");

// class Manager extends Employee {
//     constructor(name, id, email, role, officeNumber) {
//         super(name, id, email);
//         this.officeNum = officeNumber;
//         this.role = role;
//     }

//     getRole() {
//         return "Manager";
//     }

//     getOfficeNumber() {
//         return this.officeNum;
//     }
// }

// module.exports = Manager;

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email);
        this.role = role;
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

}

module.exports = Manager;