'use strict';


//create prototype
let appData = {
    budget: null,
    timeData: null,
    income: [],
    savings: true,
    _checkExpName: function(str){
        /* валидация строкового имени расхода, полученного через prompt */ 
        if(str == null) {return false;}
        if(str.lenght > 10 || str == '') {return false;}
        return true;
    },
    _checkExpVal: function(val){
        /* валидация значения размера расхода и т.п. значений, полученных через prompt */
        if(val == null || isNaN(val) || val == undefined ) {return false;}
        return true;
    },
    getExpenses: function(n = 2){
        /* получаем n обязательных расходов. Запрашиваем название и размер расхода */
        for(let i = 0, a, b; i < n; i++){
            a = prompt('Введите название статьи обязательных расходов ', 'Обязательный расход ' + (i+1));
            b = prompt('Его значение', 0);
            
            if(appData._checkExpName(a) && appData._checkExpVal(b)){
                this.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    getOptExpenses: function (n = 2){
        /* получаем n необязательных расходов. Запрашиваем только их размер */
        for(let i = 0, a, b; i < n; i++){
            b = prompt('Введите размер необязательного расхода №' + (i+1), 0);
            
            if(appData._checkExpVal(b)){
                this.optionalExpenses[i+1] = b;
            } else {
                i--;
            }
        }
    },
    checkSavings: function (){
        // check if a person has savings
        if(this.savings){
            let save, percent;
            do{
                save = prompt('Какова сумма Ваших накоплений?');
                percent = prompt('Под какой процент?');
            } while(!(appData._checkExpName(save) && appData._checkExpVal(percent) && !isNaN(percent)));
            this.monthIncome = ((+save)/100/12*(+percent)).toFixed(2);
            alert('Ежемесячный доход с Вашего депозита составляет: ' + this.monthIncome);
        }
    },
    detectLevel: function (income, l1 = 500, l2 = 2000){
        /*  
            определяем уровнь достатка
            income - входные данные о доходе/бюджете
            l1, l2 - уровни достатка
        */
        if(income < l1){
            console.log('Низкий уровень достатка: ' + income);
        } else if(income >= l1 && income <= l2){
            console.log('Средний уровень достатка: ' + income);
        } else if(income > l2){
            console.log('Высокий уровень достатка: ' + income);
        } else {
            console.log('Удивительно, но что-то пошло не так. Ошибка!');
        }
    }, 
    detectDayDudget(){
        this.moneyPerDay = +(this.budget / 30).toFixed(1);
        alert("Доступный ежедневный расход: " + this.moneyPerDay);
    },
    getIncome: function(){
        let items;
        do{
            items = prompt('Укажите источники дополнительного дохода (через запятую)', '');
        } while (!appData._checkExpName(items));
        this.income = items.split(', ').join(',').split(',');
        this.income.forEach(function(item, i){
            document.write('<p>Способы заработка' + (i+1) + ': ' + item) + '</p>';
        });
    }
};

//define constructor
function FinProfile(money, data = '2000-01-01'){
    this.__proto__ = appData;
    this.budget = +money;
    this.timeData = data;
    this.expenses = {};
    this.optionalExpenses = {};
}

// *** The program started here ***

// set global variables

let money, time;
let toLog = (msg) => console.log(msg);
let toScreen = (msg) => document.write(msg);

getMoneyAndTime(); //prompt money and time from user

let profile1 = new FinProfile(money, time);
profile1.savings = true;


// profile1.getExpenses();
// profile1.getOptExpenses(3);
// profile1.detectLevel(profile1.budget);
// profile1.checkSavings();
profile1.getIncome();

toScreen('</br> <h2>Structure of the object</h2>');
for(let key in profile1){
    toScreen('<b>' + key + '</b>' + ': ' + profile1[key] + '</br>');
}




function getMoneyAndTime(){
    /* запрашиваем бюджет appData.budget и дату appData.time */
    do{
        money = prompt('Ваш бюджет на месяц', 0);
    } while(isNaN(money) || money == '' || money == null);

    do{
        time = prompt('Введите дату в формате ГГГГ-ММ-ДД', '2000-01-01');
    } while(false); //reserved for entered time format validation
}



