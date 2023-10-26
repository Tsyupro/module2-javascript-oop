// Завдання 1: Робота з автомобілем
const car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2022,
    averageSpeed: 60
};

function displayCarInfo() {
    alert(`Виробник: ${car.manufacturer}, Модель: ${car.model}, Рік випуску: ${car.year}, Середня швидкість: ${car.averageSpeed} км/год`);
}

function calculateTravelTime() {
    const distance = parseFloat(prompt("Введіть відстань (км):"));
    if (!isNaN(distance)) {
        const hours = Math.floor(distance / car.averageSpeed);
        const breaks = Math.floor(hours / 4);
        const totalTime = hours + breaks;
        alert(`Для подолання відстані ${distance} км автомобілю потрібно ${totalTime} годин`);
    } else {
        alert("Некоректний ввід. Будь ласка, введіть число.");
    }
}

// Завдання 2: Робота з дробами
const fraction1 = {
    numerator: 1,
    denominator: 4
};

const fraction2 = {
    numerator: 3,
    denominator: 8
};

function addFractions() {
    const resultNumerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
    const resultDenominator = fraction1.denominator * fraction2.denominator;
    alert(`Результат додавання: ${resultNumerator}/${resultDenominator}`);
}

function subtractFractions() {
    const resultNumerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
    const resultDenominator = fraction1.denominator * fraction2.denominator;
    alert(`Результат віднімання: ${resultNumerator}/${resultDenominator}`);
}

function multiplyFractions() {
    const resultNumerator = fraction1.numerator * fraction2.numerator;
    const resultDenominator = fraction1.denominator * fraction2.denominator;
    alert(`Результат множення: ${resultNumerator}/${resultDenominator}`);
}

function divideFractions() {
    const resultNumerator = fraction1.numerator * fraction2.denominator;
    const resultDenominator = fraction1.denominator * fraction2.numerator;
    alert(`Результат ділення: ${resultNumerator}/${resultDenominator}`);
}

function simplifyFraction() {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const commonDivisor = gcd(fraction1.numerator, fraction1.denominator);
    const simplifiedNumerator = fraction1.numerator / commonDivisor;
    const simplifiedDenominator = fraction1.denominator / commonDivisor;
    alert(`Скорочений дріб: ${simplifiedNumerator}/${simplifiedDenominator}`);
}

// Завдання 3: Робота з часом
const time = {
    hours: 20,
    minutes: 30,
    seconds: 45
};

function displayTime() {
    alert(`Час: ${time.hours}:${time.minutes}:${time.seconds}`);
}

function addSeconds() {
    const secondsToAdd = parseInt(prompt("Введіть кількість секунд для додавання:"));
    if (!isNaN(secondsToAdd)) {
        time.seconds += secondsToAdd;
        if (time.seconds >= 60) {
            const minutesToAdd = Math.floor(time.seconds / 60);
            time.minutes += minutesToAdd;
            time.seconds %= 60;
        }
        if (time.minutes >= 60) {
            const hoursToAdd = Math.floor(time.minutes / 60);
            time.hours += hoursToAdd;
            time.minutes %= 60;
        }
        alert(`Новий час: ${time.hours}:${time.minutes}:${time.seconds}`);
    } else {
        alert("Некоректний ввід. Будь ласка, введіть число.");
    }
}

function addMinutes() {
    const minutesToAdd = parseInt(prompt("Введіть кількість хвилин для додавання:"));
    if (!isNaN(minutesToAdd)) {
        time.minutes += minutesToAdd;
        if (time.minutes >= 60) {
            const hoursToAdd = Math.floor(time.minutes / 60);
            time.hours += hoursToAdd;
            time.minutes %= 60;
        }
        alert(`Новий час: ${time.hours}:${time.minutes}:${time.seconds}`);
    } else {
        alert("Некоректний ввід. Будь ласка, введіть число.");
    }
}

function addHours() {
    const hoursToAdd = parseInt(prompt("Введіть кількість годин для додавання:"));
    if (!isNaN(hoursToAdd)) {
        time.hours += hoursToAdd;
        alert(`Новий час: ${time.hours}:${time.minutes}:${time.seconds}`);
    } else {
        alert("Некоректний ввід. Будь ласка, введіть число.");
    }
}
