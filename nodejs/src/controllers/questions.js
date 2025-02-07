import * as readline from 'node:readline';
import { isValidInput } from '../utils/validator.js';

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const questions = (theQuestion, type, errorMessage) => {
  return new Promise((resolve, reject) => {
    rl.question(theQuestion, (input) => {
      if (isValidInput(type, input)) {
        resolve(input);
      } else {
        console.log(errorMessage);
        resolve(questions(theQuestion, type, errorMessage));
      }
    });
  });
};
