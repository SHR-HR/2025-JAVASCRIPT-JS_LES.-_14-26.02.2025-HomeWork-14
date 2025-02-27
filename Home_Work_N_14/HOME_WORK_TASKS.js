// ========================================================================================================
// Домашнее задание.
// ========================================================================================================

// ========================================================================================================
// Курс:    Разработка интерфейса на JavaScript. 
// Дисциплина:  Основы  JavaScript. 
// ========================================================================================================

// ========================================================================================================
// Домашнее задание №14 : Работа со встроенными о бъектами JavaScript.
// ========================================================================================================

// ========================================================================================================
// Решите данную задачу, используя обработчик ошибок.
// ========================================================================================================

// 1. 
// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
// и следующие функции для работы с этим объектом.
// • Функция для вывода на экран информации об автомобиле.
// • Функция для подсчета необходимого времени для преодоления переданного расстояния.
// ========================================================================================================

// 2. 
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
// и следующие функции для работы с этим объектом.
// • Функция сложения 2-х объектов-дробей.
// • Функция вычитания 2-х объектов-дробей.
// • Функция умножения 2-х объектов-дробей.
// • Функция деления 2-х объектов-дробей.
// • Функция сокращения объекта-дроби.
// ========================================================================================================
// ========================================================================================================


// ========================================================================================================
// 🔹 Задание 1: Объект "Автомобиль"
// --------------------------------------------------------------------------------------------------------
// 📌 Описание: 
// Создаём объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость).
// Добавляем методы:
//
// 1️⃣ showInfo() - вывод информации об автомобиле.
// 2️⃣ calculateTime(distance) - подсчёт времени поездки с учётом отдыха каждые 4 часа.
// ========================================================================================================

const car = {
    manufacturer: "Toyota",  // 🔹 Производитель автомобиля
    model: "Camry",          // 🔹 Модель автомобиля
    year: 2021,              // 🔹 Год выпуска
    speed: 80,               // 🔹 Средняя скорость (км/ч)


    // ✅ Функция для вывода информации об автомобиле
    showInfo() {
        return `🚗 Автомобиль: ${this.manufacturer} ${this.model} <br>
                📅 Год выпуска: ${this.year} <br>
                ⏩ Средняя скорость: ${this.speed} км/ч`;
    },


    // ✅ Функция расчёта времени поездки с учётом отдыха каждые 4 часа
    calculateTime(distance) {
        let travelTime = distance / this.speed; // 📌 Время в пути без отдыха
        let restTime = Math.floor(travelTime / 4); // 📌 Количество перерывов (каждые 4 часа)
        let totalTime = travelTime + restTime; // 📌 Итоговое время с учётом отдыха
        return `⏳ Время в пути: ~${totalTime.toFixed(1)} часов (включая отдых)`;
    }
};


// ✅ Функция для отображения информации об автомобиле на странице
function displayCarInfo() {
    document.getElementById("carInfo").innerHTML = car.showInfo();
}


// ✅ Функция для расчёта времени поездки (с проверкой ввода)
function calculateTravelTime() {
    let distance = document.getElementById("distance").value;

    // 🔹 Проверка на ввод корректного числа
    if (!distance || isNaN(distance) || distance <= 0) {
        document.getElementById("travelTime").innerHTML = "⚠️ Введите корректное расстояние!";
        return;
    }

    // 🔹 Выводим рассчитанное время поездки
    document.getElementById("travelTime").innerHTML = car.calculateTime(distance);
}


// ========================================================================================================
// 🔹 Задание 2: Объект "Дробь" и математические операции с ним
// --------------------------------------------------------------------------------------------------------
// 📌 Описание:
// Создаём класс Fraction для представления дроби. 
// Добавляем методы:
//
// 1️⃣ add() - сложение двух дробей
// 2️⃣ subtract() - вычитание двух дробей
// 3️⃣ multiply() - умножение двух дробей
// 4️⃣ divide() - деление двух дробей
// 5️⃣ simplify() - сокращение дроби
// ========================================================================================================


// ✅ Функция для нахождения наибольшего общего делителя (НОД)
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); // 📌 Используем алгоритм Евклида


// ✅ Класс "Дробь"
class Fraction {
    constructor(numerator, denominator) {
        if (denominator === 0) { // ⚠️ Проверка на деление на 0
            throw new Error("❌ Ошибка: знаменатель не может быть 0!");
        }
        this.numerator = numerator;    // 🔹 Числитель
        this.denominator = denominator; // 🔹 Знаменатель
    }


    // ✅ Метод сложения двух дробей
    add(fraction) {
        let newNumerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
        let newDenominator = this.denominator * fraction.denominator;
        return new Fraction(newNumerator, newDenominator).simplify(); // 📌 Возвращаем сокращённую дробь
    }


    // ✅ Метод вычитания двух дробей
    subtract(fraction) {
        let newNumerator = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
        let newDenominator = this.denominator * fraction.denominator;
        return new Fraction(newNumerator, newDenominator).simplify();
    }


    // ✅ Метод умножения двух дробей
    multiply(fraction) {
        let newNumerator = this.numerator * fraction.numerator;
        let newDenominator = this.denominator * fraction.denominator;
        return new Fraction(newNumerator, newDenominator).simplify();
    }


    // ✅ Метод деления двух дробей
    divide(fraction) {
        if (fraction.numerator === 0) { // ⚠️ Проверка на деление на 0
            throw new Error("❌ Ошибка: деление на 0 невозможно!");
        }
        let newNumerator = this.numerator * fraction.denominator;
        let newDenominator = this.denominator * fraction.numerator;
        return new Fraction(newNumerator, newDenominator).simplify();
    }


    // ✅ Метод сокращения дроби
    simplify() {
        let divisor = gcd(this.numerator, this.denominator);
        return new Fraction(this.numerator / divisor, this.denominator / divisor);
    }


    // ✅ Метод для вывода дроби в строковом формате
    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
}


// ✅ Функция для выполнения операций с дробями
function performOperation(operation) {
    let num1 = parseInt(document.getElementById("num1").value);
    let den1 = parseInt(document.getElementById("den1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let den2 = parseInt(document.getElementById("den2").value);


    // ⚠️ Проверяем корректность ввода
    if (!num1 || !den1 || !num2 || !den2 || den1 === 0 || den2 === 0) {
        document.getElementById("fractionResult").innerHTML = "⚠️ Введите корректные значения!";
        return;
    }

    let fraction1 = new Fraction(num1, den1);
    let fraction2 = new Fraction(num2, den2);
    let result;


    // 📌 Выбираем нужную операцию
    switch (operation) {
        case 'add': result = fraction1.add(fraction2); break;
        case 'subtract': result = fraction1.subtract(fraction2); break;
        case 'multiply': result = fraction1.multiply(fraction2); break;
        case 'divide': result = fraction1.divide(fraction2); break;
    }


    // 📌 Вывод результата
    document.getElementById("fractionResult").innerHTML = `📌 Результат: ${result.toString()}`;
}


// ✅ Функция для сокращения дроби
function simplifyFraction() {
    let num1 = parseInt(document.getElementById("num1").value);
    let den1 = parseInt(document.getElementById("den1").value);


    // ⚠️ Проверяем корректность ввода
    if (!num1 || !den1 || den1 === 0) {
        document.getElementById("fractionResult").innerHTML = "⚠️ Введите корректные значения!";
        return;
    }

    let fraction = new Fraction(num1, den1).simplify();
    document.getElementById("fractionResult").innerHTML = `🔽 Сокращённая дробь: ${fraction.toString()}`;
}


// ========================================================================================================
// Конец кода. Всё максимально подробно расписано и исправлены ошибки. 🚀
// ========================================================================================================