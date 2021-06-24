# Team Profile Generator

  ## Description
  This generator will accept user input and generate a HTML file with syling that allows user to see a card style application. Clicking on employee's email address will open up a mail program to send an email. Clicking on Engineer's github address will bring them to github user profile

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  You must install Node.js, fs package, npm inquirer
  
  ## Usuage
  Using inquirer, this generator will accept used input and dynmically generate a HTML page to get a quick overlook of employees
  
  ## Credits
  @ashryan125
  
  ## License
  ![License: Mozilla](https://img.shields.io/badge/Mozilla-License-green?style=for-the-badge&logo=appveyor)
  
  [Click here for Mozilla license details](https://opensource.org/licenses/Mozilla)
 
  ## Features
  Inquirer project will ask a series of questions which will allow the program to generate an acceptable HTML page

  ## User Story
  ```
  AS A manager
  I WANT to generate a webpage that displays my team's basic info
  SO THAT I have quick access to their emails and GitHub profiles
  ```
  
  ## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

  ![Team Generator Gif](./Assets/app-walkthrough.gif)
