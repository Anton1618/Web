/* === Условное ветвление if/else === */
// const go = prompt('Готовы к игре? (y/n)')
// if (go == 'y') {
//     alert('Играем!');
// } else {
//     alert('Тогда в другой раз..');
// }

/* Простая логинизация */
// const user_name = prompt('Добрый день, как к вам можно обращаться?', 'инкогнито')
// if (user_name == 'admin') {
//     alert('С возвращением!');
// } else if (user_name == 'инкогнито') {
//     alert(`Вы остались инкогнито!`);
// } else if (user_name) {
//     alert(`Добро пожаловать, ${user_name}!`);
// } else {
//     alert(`Вы остались инкогнито!`);
// }




/* === Цикл While === */
// const counts = prompt('Я умею считать! До скольки мне посчитать?', 10)
// let counter = 0
// while (counter <= counts) {
//     console.log(counter); /* Первоначально выводится текущее значение.
//     По окончанию цикла, значение счетчика будет больше последнего выведенного на 1 */
//     ++counter /* Вывод от 1 до 11. Значение вычисляется до применения */ 
//     // counter++ /* Вывод от 0 до 10. Значение вычисляется после применения */
// }




/* === Цикл For со счетчиком === */
// const counts = prompt('Я умею считать! До скольки мне посчитать?', 10)
// for (let i=0; i<=50 ;++i) {
//     console.log(i);
// }

/* Цикл For по именам свойств */
// arr = [10, 20, 30]
// arr['foo'] = 'hello'
// for (const i in arr) {
//     console.log(i);
// }
// Вернет индексы или ключи свойств: 
// 0, 1, 2, foo

/* Цикл For по значениям имен свойств */
// arr = [10, 20, 30]
// arr['foo'] = 'hello'
// for (const i of arr) {
//     console.log(i);
// }
// Вернет только значения индексов: 
// 10, 20, 30

/* Цикл For по ключам и значениям свойств через две локальные переменные */
// const obj = {foo: 'Hello', val: 'new', bar: 'World'}
// for (const [key, val] of Object.entries(obj)) {
//     console.log(key, key);
// }
// Вернет ключи и значения свойст объекта: 
// foo Hello
// val new
// bar World

/* Аналогичный результат может быть получен, как обращение к значениям объекта через их ключи */
// const obj = {foo: 'Hello', val: 'new', bar: 'World'}
// for (const [key, val] of Object.entries(obj)) {
//     console.log(key, obj[key]);
// }
// Вернет ключи и значения свойст объекта: 
// foo Hello
// val new
// bar World




/* === Функции === */
/* declaration */
// function hello_user_declaration(user_name) {
//     alert(`Hello, ${user_name}!`)
// }

/* expression */
// const hello_user_expression = function(user_name) {
//     alert(`Hello, ${user_name}!`)
// }

/* arrow */
// const func = (user_name) => {
//     alert(`Hello, ${user_name}!`)
// }




/* Унарный (Тернарный) оператор "?" */
// Если значение выражения true, то возвращает первый операнд, иначе возвращает второй операнд
// const value = (Math.random() > 0.5) ? 0 : 1