#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
//create classes
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
//Player name and select opponent
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter your Name    ",
    },
]);
console.log(player.name);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your Opponent",
        choices: ["Skeleton", "Assassin", "Zombie"],
    },
]);
console.log(opponent.select);
//Gather the data
let p1 = new Player(player.name);
let p2 = new Opponent(opponent.select);
do {
    // skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Select your Opponent",
                choices: ["Attack", "Drink Portion", "Run for your Life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${p2.name} fuel is ${p2.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You lost, Better Luck for next Time."));
                }
            }
            if (num <= 0) {
                p2.fuelDecrease();
                console.log(chalk.bold.red(`${p2.name} fuel is ${p2.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (p2.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win. HURRAY.....!!!!!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion. Your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your Life..") {
            console.log(chalk.red.bold.italic("You lost, Better Luck for next Time."));
        }
    }
    // Assassin
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Select your Opponent",
                choices: ["Attack", "Drink Portion", "Run for your Life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${p2.name} fuel is ${p2.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You lost, Better Luck for next Time."));
                }
            }
            if (num <= 0) {
                p2.fuelDecrease();
                console.log(chalk.bold.red(`${p2.name} fuel is ${p2.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (p2.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win. HURRAY.....!!!!!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion. Your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your Life..") {
            console.log(chalk.red.bold.italic("You lost, Better Luck for next Time."));
        }
    }
    // Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Select your Opponent",
                choices: ["Attack", "Drink Portion", "Run for your Life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${p2.name} fuel is ${p2.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You lost, Better Luck for next Time."));
                }
            }
            if (num <= 0) {
                p2.fuelDecrease();
                console.log(chalk.bold.red(`${p2.name} fuel is ${p2.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (p2.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win. HURRAY.....!!!!!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion. Your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your Life..") {
            console.log(chalk.red.bold.italic("You lost, Better Luck for next Time."));
        }
    }
} while (true);
