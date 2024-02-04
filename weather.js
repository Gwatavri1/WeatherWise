const possibleWeather = ['Sunny', 'Raining', 'Cloudy'];

function pickedWeather() {
    const weatherSelected = Math.floor(Math.random() * possibleWeather.length);
    return possibleWeather[weatherSelected];
}

function simulateTemperature(weather) {
    if (weather === 'Sunny') {
        return `${Math.floor(Math.random() * 15) + 20}°C`; // Simulated temperature between 20°C and 34°C
    } else if (weather === 'Raining') {
        return `${Math.floor(Math.random() * 10) + 10}°C`; // Simulated temperature between 10°C and 19°C
    } else {
        return `${Math.floor(Math.random() * 10) + 15}°C`; // Simulated temperature between 15°C and 24°C
    }
}

function updateUser(weather) {
    const todayDate = new Date().toLocaleDateString();
    const todayWeather = document.getElementById('weatherElement');
    const advices = document.getElementById('adviceElement');
    const tempElement = document.getElementById('temperatureElement');

    todayWeather.textContent = `Today's Weather (${todayDate}): ${weather}`;
    
    let adviceMessage = '';
    let temp = simulateTemperature(weather);

    if (weather === 'Sunny') {
        adviceMessage = 'It is sunny ☀️. Remember to take your sunglasses 😎';
    } else if (weather === 'Raining') {
        adviceMessage = 'It is raining ⛈️. Remember to take your umbrella ☔';
    } else {
        adviceMessage = 'It is cloudy. Good for a walk 🚶‍♂️🚶‍♀️';
    }

    advices.textContent = `Advice: ${adviceMessage}`;
    tempElement.textContent = `Temperature: ${temp}`;
}

const buttons = document.getElementById('buttonElement');

buttons.addEventListener('click', function() {
    const finalWeather = pickedWeather();
    updateUser(finalWeather);
});
