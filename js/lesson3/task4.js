/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
*/



const sum = (number1, number2) => number1 + number2;

const multiply = (number1, number2) => number1 * number2;


const diff = (number1, number2) => {
  if (number1 > number2) {
    return number1 - number2;
  }
  if (number2 > number1) {
    return number2 - number1;
  }
  return 0;
};




console.log(`${number1} + ${number2} = ${sum(number1, number2)}`);
console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);
console.log(`${number1} / ${number2} = ${divide(number1, number2)}`);
const maxNumber = Math.max(number1, number2);
const minNumber = Math.min(number1, number2);
console.log(`${maxNumber} - ${minNumber} = ${diff(number1, number2)}`);