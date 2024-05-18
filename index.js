import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
// console.log(systemGeneratedNo);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write Your Guess Between 1 to 10 : "
    }
]);
// console.log(answer.userGuess);
const { userGuess } = answer;
console.log(userGuess, "userGuess", systemGeneratedNo, "sys");
if (userGuess === systemGeneratedNo) {
    console.log("yeah your ans is correct \n you win");
}
else {
    console.log("please try again ");
}
