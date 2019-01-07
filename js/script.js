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
    for(let i = 0, a, b; i < n; i++){
        a = prompt('Введите название статьи НЕобязательных расходов ', 'Необязательный расход ' + (i+1));
        b = prompt('Его значение', 0);
        
        if(checkExpName(a) && checkExpVal(b)){
            appData.optionalExpenses[i+1] = b;
        } else {
            i--;
        }
    }
}

function checkExpName(str){
    if(str == null) {return false;}
    if(str.lenght > 10 || str == '') {return false;}
    return true;
}

function checkExpVal(val){
    if(val == null || isNaN(val) || val == undefined ) {return false;}
    return true;
}

let toLog = (msg) => console.log(msg);

function detectLevel(income, l1 = 500, l2 = 2000){
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