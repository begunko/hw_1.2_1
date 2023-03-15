import { addDays, addMonths, addYears, subDays, subMonths, subYears } from "date-fns";

export const countCB = (description = '') =>
    (yargs) => yargs.positional('count', { describe: description, default: 0 });




export const changeDate = (isAdd = true) => (argv) => {
    const change = {
        add: { y: addYears, m: addMonths, d: addDays },
        sub: { y: subYears, m: subMonths, d: subDays },
    }
    const funcs = change[isAdd ? 'add' : 'sub'];
    let currDate = new Date();
    if (argv.year) {
        currDate = funcs.y(currDate, argv.count);
    } else if (argv.month) {
        currDate = funcs.m(currDate, argv.count);
    } else if (argv.date) {
        currDate = funcs.d(currDate, argv.count);
    };
    console.log(currDate.toISOString());
}
export const getCurrDate = () => (argv) => {
    const currDate = new Date();
    if (argv.year) {
        console.log(currDate.getFullYear());
        return;
    };
    if (argv.month) {
        //Потому что месяц начинается с 0
        console.log(currDate.getMonth() + 1);
        return;
    };
    if (argv.date) {
        console.log(currDate.getDate());
        return;
    };
    console.log(currDate.toISOString());
    return;
}