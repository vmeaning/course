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

// *** Variant with 'for' ***
//
// for(let i = 0; i < 2; i++){
//     let a = prompt('Введите статью обязательных расходов ', 'Обязательный расход ' + (i+1)),
//         b = +prompt('Его значение', 0);
    
//     if(typeof(a) != null && a.length <= 50 && a != '' && !isNaN(b) ){

//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
    
// }
//


// *** Variant with 'while' ***
//
// let i = 0;
// while(i < 2){

//     let a = prompt('Введите название статьи расходов: ', 'Обязательный расход '+ (1+i)),
//         b = +prompt('Его значение', 0);
    
//     if(typeof(a) != null && a.length <= 50 && a != '' && !isNaN(b)){

//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }

let i = 0;
do{
    let a = prompt('Введите название статьи расходов: ', 'Обязательный расход '+ (1+i)),
        b = +prompt('Его значение', 0);
    
    if(typeof(a) != null && a.length <= 50 && a != '' && !isNaN(b)){

        appData.expenses[a] = b;
    } else {
        i--;
    }

} while(++i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Доступный ежедневный расход: " + appData.moneyPerDay);