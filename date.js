// Задача 1.
// Определите количество ЧАСОВ которые прошли с 1970 года до текущего момента времени.
// Примечание: полученное значение округлите по правилам математики.

let currentTime = Date.now(); 
 let hours = currentTime / (1000 * 60 * 60); 
  let countHours = Math.floor(hours); 
console.log(countHours); 

//---
//Задача 2
// Какое количество дней прошло с начала 2000 года до текущего момент времени?
// Примечание: полученное значение округлите по правилам математики

let currentTime2 = Date.now();

 let start2000 = new Date("2000-01-01");

  let hours2 = (currentTime2 - start2000.getTime()) / (1000 * 60 * 60);

   let countHours2 = Math.round(hours);

console.log(countHours2);

//---

// Задача 3. 
// Напишите функцию getWeekDay(), которая в зависимости от даты 
// (текущего момента времени) в консоль выводит день недели согласно результату

// Пример:
// getWeekDay()

// Результат:
// 'Сегодня вторник'

function getWeekDay() {
    
 let currentDate3 = new Date();

  let dayOfWeek = currentDate3.getDay();

   let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    console.log(`Сегодня ${daysOfWeek[dayOfWeek]}`);
}

getWeekDay();

// --------------------------------
// Задача 4. 
// Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. 
// Примечание: инициализация дат должна быть внутри функции 

function checkDate() {

    let currentDate4 = new Date();
     let currentMonth = currentDate4.getMonth();
      let currentYear = currentDate4.getFullYear();
       let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        let currentDay = currentDate4.getDate();
         let daysToEndOfMonth = daysInMonth - currentDay;

    console.log(`До конца текущего месяца осталось ${daysToEndOfMonth} дней`);
}

checkDate();


