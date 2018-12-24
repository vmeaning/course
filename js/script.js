'use strict';

let a=parseInt(prompt('Ваш бюджет на месяц', 0));
// console.log(a);
let b=prompt('Введите дату в формате ГГГГ-ММ-ДД', '2000-01-01');

let appData = {
    budget: a,
    timeData: b,
    expenses: {},
    optionalExpenses: null,
    income: [],
    savings: false
};

let first = prompt('Введите статью обязательных расходов', 'Обязательный расход');
appData.expenses[first] = parseInt(prompt('Его значение', 0));
let second = prompt('Введите статью обязательных расходов', 'Обязательный расход');
appData.expenses[second] = parseInt(prompt('Его значение', 0));

let daily = (appData.budget - appData.expenses[first] - appData.expenses[second])/30;
alert("Доступный ежедневный расход: " + daily);