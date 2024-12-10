"use strict"; // Включает строгий режим, который делает код более безопасным.

// Инкапсуляция с функциями
/*
// Функция-конструктор `User` для создания объектов с приватным свойством `userAge`.
function User(name, age) {
    this.name = name; // Публичное свойство `name`.
    let userAge = age; // Приватное свойство `userAge`.

    // Метод для вывода имени и возраста пользователя.
    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
    };

    // Метод для получения значения `userAge`.
    this.getAge = function() {
        return userAge;
    };

    // Метод для установки нового значения `userAge`.
    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age; // Устанавливается новое значение, если оно допустимо.
        } else {
            console.log('Недопустимое значение'); // Выводится сообщение об ошибке.
        }
    };
}

// Создается объект `ivan` с именем "Ivan" и возрастом 27.
const ivan = new User('Ivan', 27);
console.log(ivan.name); // Вывод публичного свойства `name`.
console.log(ivan.getAge()); // Получение значения приватного свойства через метод.

ivan.setAge(30); // Установка нового допустимого возраста.
ivan.setAge(300); // Попытка установить недопустимый возраст.
console.log(ivan.getAge()); // Проверка текущего возраста.

ivan.say(); // Вывод данных пользователя через метод.
*/

// Инкапсуляция с классами
class User {
    constructor(name, age) {
        this.name = name; // Публичное свойство `name`.
        this._age = age; // Полуприватное свойство `_age`.
    }

    #surname = 'Petrychenko'; // Приватное свойство `#surname`.

    // Метод для вывода имени, фамилии и возраста.
    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    };

    // Геттер для получения значения `_age`.
    get age() {
        return this._age;
    }

    // Сеттер для установки значения `_age`.
    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age; // Устанавливается новое значение, если оно допустимо.
        } else {
            console.log('Недопустимое значение'); // Выводится сообщение об ошибке.
        }
    }
}

// Создается объект `ivan` с именем "Ivan" и возрастом 27.
const ivan = new User('Ivan', 27);
console.log(ivan.surname); // Ошибка: доступ к приватному свойству невозможен.

ivan.say(); // Вывод данных пользователя через метод.
