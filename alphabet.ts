//Check if the alphabet is vowel or not//
import inquirer from "inquirer";
let vowels = 
{
  alphabet: ['a','e','i','o','u'],
}
inquirer.prompt
([
{
  name: 'alphabet',
  type: 'string',
  message: "Please Enter your alphabet: ",
}
])
.then((answer)=>
{
    if (vowels.alphabet.includes(answer.alphabet))
    {
      console.log(`${answer.alphabet} is a Vowel`);
    }
    else
    {
        console.log(`${answer.alphabet} is not a Vowel`)
    }
});
