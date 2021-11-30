#!/usr/bin/env node
import add from "./src/operations/add/add";
import subtract from "./src/operations/subtract/subtract";
import {multiply} from "./src/operations/multiply/multiply";
import divide from "./src/operations/divide/divide";

const operation = process.argv[2];
const a = +process.argv[3];
const b = +process.argv[4];

let res = 0;
switch (operation) {
    case 'add':
        res = add(a, b);
        break;
    case 'divide':
        res = divide(a, b);
        break;
    case 'subtract':
        res = subtract(a, b);
        break;
    case 'multiply':
        res = multiply(a, b);
        break;
}
console.log(res)