'use strict';

let money = +prompt('Ваш бюджет на месяц', 0),
    time = prompt('Введите дату в формате ГГГГ-ММ-ДД', '2000-01-01');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: null,
    income: [],
    savings: false
};

for(let i = 0; i < 2; i++){
    let a = prompt('Введите статью обязательных расходов', 'Обязательный расход'),
        b = +prompt('Его значение', 0);
    
    if(typeof(a) != null && a.length <= 50 && a != '' && b != NaN){

        appData.expenses[a] = b;
    } else {
        i--;
    }
    
}

appData.moneyPerDay = appData.budget / 30;

alert("Доступный ежедневный расход: " + appData.moneyPerDay);