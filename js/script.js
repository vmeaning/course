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

appData.expenses[prompt('Введите статью обязательных расходов', 'Обязательный расход')] = parseInt(prompt('Его значение', 0));
appData.expenses[prompt('Введите статью обязательных расходов', 'Обязательный расход')] = parseInt(prompt('Его значение', 0));
