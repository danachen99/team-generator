const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
        super(name, id, email, position);
        this.position = "Engineer";
    }
}