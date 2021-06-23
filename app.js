const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { createInflate } = require("zlib");


const employees = [];

const team = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number? (numbers only)",
            validate: (answer) => {
                if (isNaN(answer)) {
                    return "Please use numbers only";
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?"
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "What is the manager's office number? (numbers only)",
            validate: (answer) => {
                if (isNaN(answer)) {
                    return "Please use numbers only";
                } else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'moreTeamMembers',
            message: "Do you want to add a team member (Engineer or Intern)?",
            default: true
        },
        {
            type: 'list',
            name: 'employeeType',
            message: "What type of employee would you like to add??",
            choices: ["Engineer", "Intern"],
            when: ({ moreTeamMembers }) => {
                if (moreTeamMembers) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
        .then(function (data) {
            let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            employees.push(manager);
            if (data.employeeType === 'Engineer') {
                engineerQuestion();
            } else if (data.employeeType === 'Intern') {
                internQuestion();
            } else {
                createFile();
            }
        })
}

const engineerQuestion = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is engineer's ID number? (numbers only)",
            validate: (answer) => {
                if (isNaN(answer)) {
                    return "Please use numbers only";
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is engineer's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?"
        },
        {
            type: 'confirm',
            name: 'moreTeamMembers',
            message: "Do you want to add a team member (Engineer or Intern)?",
            default: true
        },
        {
            type: 'list',
            name: 'employeeType',
            message: "What type of employee would you like to add??",
            choices: ["Engineer", "Intern"],
            when: ({ moreTeamMembers }) => {
                if (moreTeamMembers) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
        .then(function (data) {
            let engineer = new Engineer(data.name, data.id, data.email, data.github);
            employees.push(engineer);
            if (data.employeeType === 'Engineer') {
                engineerQuestion();
            } else if (data.employeeType === 'Intern') {
                internQuestion();
            } else {
                createFile();
            }
        });
}

const internQuestion = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is intern's ID number? (numbers only)",
            validate: (answer) => {
                if (isNaN(answer)) {
                    return "Please use numbers only";
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is intern's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school name?"
        },
        {
            type: 'confirm',
            name: 'moreTeamMembers',
            message: "Do you want to add a team member (Engineer or Intern)?",
            default: true
        },
        {
            type: 'list',
            name: 'employeeType',
            message: "What type of employee would you like to add??",
            choices: ["Engineer", "Intern"],
            when: ({ moreTeamMembers }) => {
                if (moreTeamMembers) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
        .then(function (data) {
            let intern = new Intern(data.name, data.id, data.email, data.school);
            employees.push(intern);
            if (data.employeeType === 'Engineer') {
                engineerQuestion();
            } else if (data.employeeType === 'Intern') {
                internQuestion();
            } else {
                createFile();
            }
        });
}

const createFile = () => {
    let final = render(employees);
    // if output directory does not exist, create it, then write file team.html
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, final, "utf-8");
    console.log('HTML file created in output folder. Open in browser!');
};

team();
