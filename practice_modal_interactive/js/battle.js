// const enemy = document.getElementById('enemy')// Объявление переменной enemy, типа константа. 
// Присвоение переменной значения id из документа, с аргументом enemy. Таким образом, применяя id, происходит обращение к элементу javascript

// console.log(enemy) // Вывод данных в консоль, например, значения переменной, тогда при выборе элемента в консоли инспектором, будет указывать на положение этого элемента на странице
// console.log(enemy.innerText) //Вывод вложенного текста элемента

//Интерактив для ввода и применения текста как элемента для отображения на странице
// const new_enemy = prompt('Кто соперник в битве:', 'Тайна богов войны')
// enemy.innerText = text


// Новый вариант
const enemy = document.getElementById('enemy')
const new_enemy = prompt('Назови свое имя, гладиатор', 'Инкогнито')
enemy.innerText = new_enemy

const is_winner = document.getElementById('is_winner')
const new_is_winner = prompt('Кто победил в этом сражении?', 'Несчастный случай')
is_winner.innerText = new_is_winner
// Либо включить в выражение тернарный оператор для применения булева значения функции confirm() 
