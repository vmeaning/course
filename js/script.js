'use strict';

//set global variables
let appData = {
    budget: null,
    timeData: null,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function getMoneyAndTime(){
    /* запрашиваем бюджет appData.budget и дату appData.time */
    let money, time;
    do{
        money = prompt('Ваш бюджет на месяц', 0);
    } while(isNaN(money) || money == '' || money == null);
    appData.budget = money;

    do{
        time = prompt('Введите дату в формате ГГГГ-ММ-ДД', '2000-01-01');
    } while(false); //reserved for entered time format validation
    appData.timeData = time;
}

function getExpenses(n = 2){
    /* получаем n обязательных расходов. Запрашиваем название и размер расхода */
    for(let i = 0, a, b; i < n; i++){
        a = prompt('Введите название статьи обязательных расходов ', 'Обязательный расход ' + (i+1));
        b = prompt('Его значение', 0);
        
        if(checkExpName(a) && checkExpVal(b)){
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

function getOptExpenses(n = 2){
    /* получаем n необязательных расходов. Запрашиваем только их размер */
    for(let i = 0, a, b; i < n; i++){
        // a = prompt('Введите название статьи НЕобязательных расходов ', 'Необязательный расход ' + (i+1));
        b = prompt('Введите размер необязательного расхода №' + (i+1), 0);
        
        if(checkExpVal(b)){
            appData.optionalExpenses[i+1] = b;
        } else {
            i--;
        }
    }
}

function checkExpName(str){
    /* валидация строкового имени расхода, полученного через prompt */ 
    if(str == null) {return false;}
    if(str.lenght > 10 || str == '') {return false;}
    return true;
}

function checkExpVal(val){
    /* валидация значения размера расхода и т.п. значений, полученных через prompt */
    if(val == null || isNaN(val) || val == undefined ) {return false;}
    return true;
}

let toLog = (msg) => console.log(msg);

function detectLevel(income, l1 = 500, l2 = 2000){
    /*  
        определяем уровнь достатка
        income - входные данные о доходе/бюджете
        l1, l2 - уровни достатка
    */
    if(income < l1){
        return('Низкий уровень достатка: ' + income);
    } else if(income >= l1 && income <= l2){
        return('Средний уровень достатка: ' + income);
    } else if(income > l2){
        return('Высокий уроыень достатка: ' + income);
    } else {
        return('Удивительно, но что-то пошло не так. Ошибка!');
    }
}


getMoneyAndTime();      //prompt form user appData.bufget and appData.timeData values
getExpenses();          //prompt expenses
getOptExpenses(3);      //prompt optional expenses
toLog(detectLevel(appData.budget));







appData.moneyPerDay = +(appData.budget / 30).toFixed(1);

alert("Доступный ежедневный расход: " + appData.moneyPerDay);