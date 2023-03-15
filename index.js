#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from 'yargs/helpers';
import { getCurrDate, changeDate, countCB } from './helpers.js';
const res = yargs(hideBin(process.argv))
    .command('current', 'get current date in ISO format', () => { }, getCurrDate())
    .command('add [count]', 'add', countCB('count of d/m/y to add to current Date'), changeDate(true))
    .command('sub [count]', 'sub', countCB('count of d/m/y to sub from current Date'), changeDate(false))
    .option('year', {
        alias: 'y',
        type: 'boolean',
        description: 'Year criteria',
    })
    .option('month', {
        alias: 'm',
        type: 'boolean',
        description: 'Month criteria',
    })
    .option('date', {
        alias: 'd',
        type: 'boolean',
        description: 'Day criteria',
    })
    .parse()