#!/usr/bin/env node
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const num = Math.floor(Math.random() * 100);
console.log('Загадано число в диапазоне от 0 до 100');
let answer = -1;
answer = Number(await rl.question(''));
while (num !== answer) {
    if (answer > num) {
        console.log('Меньше');
    } else {
        console.log('Больше');
    }
    answer = Number(await rl.question(''));
}

console.log(`Отгадано число ${answer}`);

rl.close();