//Require the inquirer package
const inquirer = require('inquirer');
//Require fs
const fs = require('fs');
//Require our classes from shapes.js
const { Circle, Square, Triangle } = require("./lib/shapes.js");

//Use Inquirer to prompt the user to provide the following information:
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter three characters for the SVG logo text',
      maxLength: 3,
    },
    // Prompt for text color
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a text color in hexadecimal format',

      validate: (val) => {
        //regex expression checks for hex code (limit digits to 0-9 and letters to a-f 
        if (!/^#[0-9a-f]{6}$/i.test(val)) {
          return 'That is not a hex code please try again';
        }
        return true;
      }
    },
    // Prompt to choose one of three choices
    {
      type: 'list',
      message: 'Choose a shape',
      name: 'shape',
      choices: ['circle', 'square', 'triangle'],
    },
    // Prompt for shape color
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a shape color in hexadecimal format',

      validate: (val) => {
        //regex expression checks for hex code (limit digits to 0-9 and letters to a-f 
        if (!/^#[0-9a-f]{6}$/i.test(val)) {
          return 'That is not a hex code please try again';
        }
        return true;
      }
    },
  ])