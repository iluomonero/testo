'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData : time,
    expenses : {
        name1 : prompt("Введите обязательную статью расходов в этом месяце"),
        name2 : prompt("Введите обязательную статью расходов в этом месяце"),
        budget1 : prompt("Во сколько обойдется?"),
        budget2 : prompt("Во сколько обойдется?")
    },
    optionalExpenses : {},
    income : [],
    savings : false
}

alert("Бюджет на один день: " + ((appData.budget-appData.expenses.budget1-appData.expenses.budget2)/30) );
