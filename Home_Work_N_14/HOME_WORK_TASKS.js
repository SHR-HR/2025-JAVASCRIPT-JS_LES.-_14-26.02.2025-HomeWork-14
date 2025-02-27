//=========================================================================================================
// Домашнее задание.
//=========================================================================================================
// Курс:    Разработка интерфейса на JavaScript. 
// Дисциплина:  Основы  JavaScript. 
//=========================================================================================================
// Домашнее задание №14 : Работа со встроенными о бъектами JavaScript.
//=========================================================================================================
// Решите данную задачу, используя обработчик ошибок.
//=========================================================================================================
// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
// и следующие функции для работы с этим объектом.
// • Функция для вывода на экран информации об автомобиле.
// • Функция для подсчета необходимого времени для преодоления переданного расстояния.
// --------------------------------------------------------------------------------------------------------
// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
// и следующие функции для работы с этим объектом.
// • Функция сложения 2-х объектов-дробей.
// • Функция вычитания 2-х объектов-дробей.
// • Функция умножения 2-х объектов-дробей.
// • Функция деления 2-х объектов-дробей.
// • Функция сокращения объекта-дроби.
//=========================================================================================================
//=========================================================================================================

// Задание 1: Объект "Автомобиль"
// --------------------------------------------------------------------------------------------------------
// Создадим объект car, который будет содержать данные об автомобиле и две функции:
// Вывод информации об автомобиле.
// Расчёт времени, необходимого для преодоления заданного расстояния (с учётом отдыха каждые 4 часа).

// =========================================================================================================
// Задание 1: Объект "Автомобиль"
// =========================================================================================================

const car = {
        manufacturer: "Toyota",
        model: "Camry",
        year: 2021,
        speed: 80, // км/ч (средняя скорость)
    
        // Функция для вывода информации об автомобиле
        showInfo() {
            return `🚗 Автомобиль: ${this.manufacturer} ${this.model} <br>
                    📅 Год выпуска: ${this.year} <br>
                    ⏩ Средняя скорость: ${this.speed} км/ч`;
        },
    
        // Функция расчёта времени для преодоления расстояния
        calculateTime(distance) {
            let travelTime = distance / this.speed; // Время в часах
            let restTime = Math.floor(travelTime / 4); // Количество перерывов
            let totalTime = travelTime + restTime; // Общее время с учётом отдыха
            return `⏳ Время в пути: ~${totalTime.toFixed(1)} часов (включая отдых)`;
        }
    };
    
    // Функции для работы с DOM
    function displayCarInfo() {
        document.getElementById("carInfo").innerHTML = car.showInfo();
    }
    
    function calculateTravelTime() {
        let distance = document.getElementById("distance").value;
        if (!distance || distance <= 0) {
            document.getElementById("travelTime").innerHTML = "⚠️ Введите корректное расстояние!";
            return;
        }
        document.getElementById("travelTime").innerHTML = car.calculateTime(distance);
    }    

//=========================================================================================================

// Задание 2: Объект "Дробь" и математические операции с ним
// --------------------------------------------------------------------------------------------------------
// Создадим объект Fraction, который будет представлять дробь и включать методы:
    
// сложение (add)
// вычитание (subtract)
// умножение (multiply)
// деление (divide)
// сокращение дроби (simplify)

// =========================================================================================================
// Задание 2: Объект "Дробь" и математические операции
// =========================================================================================================

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); // Нахождение НОД

class Fraction {
    constructor(numerator, denominator) {
        if (denominator === 0) {
            throw new Error("❌ Ошибка: знаменатель не может быть 0!");
        }
        this.numerator = numerator;
        this.denominator = denominator;
    }

    add(fraction) {
        let newNumerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
        let newDenominator = this.denominator * fraction.denominator;
        return new Fraction(newNumerator, newDenominator).simplify();
    }

    subtract(fraction) {
        let newNumerator = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
        let newDenominator = this.denominator * fraction.denominator;
        return new Fraction(newNumerator, newDenominator).simplify();
    }

    multiply(fraction) {
        let newNumerator = this.numerator * fraction.numerator;
        let newDenominator = this.denominator * fraction.denominator;
        return new Fraction(newNumerator, newDenominator).simplify();
    }

    divide(fraction) {
        if (fraction.numerator === 0) {
            throw new Error("❌ Ошибка: деление на 0 невозможно!");
        }
        let newNumerator = this.numerator * fraction.denominator;
        let newDenominator = this.denominator * fraction.numerator;
        return new Fraction(newNumerator, newDenominator).simplify();
    }

    simplify() {
        let divisor = gcd(this.numerator, this.denominator);
        return new Fraction(this.numerator / divisor, this.denominator / divisor);
    }

    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
}

function performOperation(operation) {
    let num1 = parseInt(document.getElementById("num1").value);
    let den1 = parseInt(document.getElementById("den1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let den2 = parseInt(document.getElementById("den2").value);

    let fraction1 = new Fraction(num1, den1);
    let fraction2 = new Fraction(num2, den2);
    let result = fraction1[operation](fraction2);

    document.getElementById("fractionResult").innerHTML = `📌 Результат: ${result.toString()}`;
}

function simplifyFraction() {
    let num1 = parseInt(document.getElementById("num1").value);
    let den1 = parseInt(document.getElementById("den1").value);
    let fraction = new Fraction(num1, den1).simplify();
    document.getElementById("fractionResult").innerHTML = `🔽 Сокращённая дробь: ${fraction.toString()}`;
}

//=========================================================================================================



