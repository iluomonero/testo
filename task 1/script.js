'use strict';

let money, time;

function start(){
    
    time = prompt("Введите дату в формате YYYY-MM-DD");

    do {money = +prompt("Ваш бюджет на месяц?");}
    while(isNaN(money) || money == "" || money == null);
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {

            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            }
            else {
                i -= 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = +(appData.budget / 30).toFixed;
        alert("Бюджет на один день: " + appData.moneyPerDay);
    },
    detectLevel: function(){
        switch (appData.moneyPerDay) {
            case appData.moneyPerDay < 100: console.log("Миниальный уровень достатка");
            break;
            case appData.moneyPerDay < 2000: console.log("Средний уровень достатка");
            break;
            case appData.moneyPerDay > 2000: console.log("Высокий уровень достатка");
            break;
            default: console.log("Произошла ошибка"); 
            break;
        }
    },
    checkSavings: function(){
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательныйх расходов:");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function(){
        let items;
        do {
            items = prompt("Что принесёт дополнительный доход? (перечислить после запятой", "")
        } while(typeof(items) !== "string" || items == "" || items == null);
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то ещё?"));
        appData.income.sort();
        console.log("Способы доп заработка:");
        appData.income.forEach(function(item,i){
            console.log(++i + ": " + item);
        });
    },
    showProperties: function(){
        console.log("Наша программа включает в себя данные: "); 
        for(let key in appData){
            console.log(key + ": " + appData[key]);
        }
    }
    
}










