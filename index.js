const inquirer = require("inquirer");
// const fs = require("fs");
//const axios = require("axios");
// const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    "Add your manager", "Enter the name:", "Add another person to your team", "ID: ", "Email: ", "Office number: ", "Do you want to add another member?"
];

function promptUser() {
    let answers = {};
    return inquirer
        .prompt([{
                type: "input",
                message: questions[1],
                name: "name"
            },
            {
                type: "checkbox",
                message: questions[2],
                name: "role",
                choices: ["Engineer", "Intern", "I don't want to add anymore members"]
            },
            {
                type: "input",
                message: questions[3],
                name: "id"
            },
            {
                type: "input",
                message: questions[4],
                name: "email"
            },
            {
                type: "input",
                message: questions[5],
                name: "officenum"
            }
        ])
        .then(function(res) {
            answers.role = res.role;
            console.log(res);
        });
}

promptUser();