//import { largestSumAfterNegations } from './largestSumKNegation.js';
import { packge01 } from './package.js';

const values: number[] = [15,20,30];
const weight: number[] = [1,3,4];
//const result: number = largestSumAfterNegations(values, 1);
const result: number = packge01(values, weight, 4);

console.log(result);
