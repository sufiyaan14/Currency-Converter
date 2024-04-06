#! /usr/bin/env node
import inquirer from "inquirer";
const value = {
    USD: 1, // Base currency
    EUR: 0.92,
    INR: 74.57,
    PKR: 277.54,
    AED: 3.67,
    CAD: 1.36,
};
let currency = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "AED", "CAD"],
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "AED", "CAD"],
    },
    {
        message: "Enter Your Amount",
        name: "amount",
        type: "number",
    },
]);
let fromAmount = value[currency.from];
let toAmount = value[currency.to];
let amount = currency.amount;
let baseAmount = amount / fromAmount; // USD Base Currency
let convertedAmount = baseAmount * toAmount;
let rounded = convertedAmount.toFixed();
console.log(rounded);
