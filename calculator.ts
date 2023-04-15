
import inquirer from 'inquirer';
let Answers=
{
  num1: 'number',
  num2: 'number',
  operation: ['+', '-', '*','/', '%'],
}
let questions = 
[
  {
    type: 'number',
    name: 'num1',
    message: 'Enter the 1st number:',
  },
  {
    type: 'number',
    name: 'num2',
    message: 'Enter the 2nd number:',
  },
  {
    type: 'list',
    name: 'operation',
    message: 'Select the operation you want to perform:',
    choices: ['+','/','*','-','%'],
  },
];
function calculate(answers: any) 
{
  switch (answers.operation) 
  {
    case '+':
      return answers.num1 + answers.num2;
    case '-':
      return answers.num1 - answers.num2;
    case '*':
      return answers.num1 * answers.num2;
    case '/':
      return answers.num1 / answers.num2;
    case '%':
      return answers.num1 % answers.num2;
  }
}
inquirer.prompt(questions).then((answers: any) =>
{
  const result = calculate(answers);
  console.log(`The result is: ${result}`);
});
