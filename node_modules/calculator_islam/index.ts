#! /usr/bin/env node

import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
import {sum, subtract, division, multiply} from "./operations.js";
// console.log(sum(2,3)); 
// console.log(subtract(5,3));
// console.log(multiply(5,3));
// console.log(division(8,2));

const welcome=async ()=>{
    console.log(figlet.textSync("Calculator"));

   const input =await inquirer.prompt([
     {
        type: "number", //default type
        name: "num1",  //this is the name in which value is stored 
        message: "Enter first number",
     },
     {
        type: "number", 
        name: "num2",  
        message: "Enter Second number",
     },
     {
        type: "list", 
        name: "operation",  
        message: "Select your operation",
        choices: ["+","-","/","*"],
     }
  ]);
  console.log(input);
  if (input.operation==='+'){
    const result=sum(input.num1,input.num2);
    console.log(chalk.bgGreen(`result:${result}`));
  }
 else if (input.operation==='-'){
    const result=subtract(input.num1,input.num2);
    console.log(chalk.bgGreen(`result:${result}`));
  }
 else if (input.operation==='/'){
    const result=division(input.num1,input.num2);
    console.log(chalk.bgGreen(`result:${result}`));
  }
 else if (input.operation==='*'){
    const result=multiply(input.num1,input.num2);
    console.log(chalk.bgGreen(`result:${result}`));
  }
else{
    console.log("invalid operation");
}
};

await welcome();

