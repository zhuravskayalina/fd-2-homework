const circle = document.querySelector('.clock');
const hoursHand = document.querySelector('.hours');
const minutesHand = document.querySelector('.minutes');
const secondsHand = document.querySelector('.seconds');

// центр циферблата
let circleCenterX = circle.offsetWidth / 2;
let circleCenterY = circle.offsetHeight / 2;

//делаем круг в центре из которого идут стрелки
const centerDial = document.createElement('div');
centerDial.classList.add('dial-center');
circle.append(centerDial)
centerDial.style.top = Math.round(circleCenterY - centerDial.offsetHeight / 2) + 'px';
centerDial.style.left = Math.round(circleCenterX - centerDial.offsetWidth / 2) + 'px';

function clockHandsPosition(hand) {
    hand.style.top = Math.round(circleCenterY - hand.offsetHeight) + 'px';
    hand.style.left = Math.round(circleCenterX - hand.offsetWidth / 2) + 'px';
}

//позиционирование стрелок по центру циферблата
clockHandsPosition(hoursHand);
clockHandsPosition(minutesHand);
clockHandsPosition(secondsHand);

let angle = 0; //угол поворота
let timeNumberCount = 1; //цифры циферблата

for (let i = 0; i < 12; i++) {
    let number = document.createElement('div');
    number.classList.add('number');
    number.textContent = timeNumberCount;
    timeNumberCount++;

    circle.append(number); //добавляем сразу, что бы были доступны размеры

    let radius = circle.offsetHeight / 2 - number.offsetHeight / 2 - 10; // 10 - расстояние от края циферблата
    angle += 30;
    let angleRadians = parseFloat(angle) / 180 * Math.PI;

    let numberCenterX = circleCenterX + radius * Math.sin(angleRadians);
    let numberCenterY = circleCenterY - radius * Math.cos(angleRadians);

    number.style.left = Math.round(numberCenterX - number.offsetWidth / 2) + "px";
    number.style.top = Math.round(numberCenterY - number.offsetHeight / 2) + "px";
}

function startTime() {
    const deg = 6; // градус поворота минутной стрелки

    let timer = setInterval(() => {
        const date = new Date();
        const hours = date.getHours() * 30; //30 - градус поворота часовой стрелки
        const minutes = date.getMinutes() * deg;
        const seconds = date.getSeconds() * deg;

        hoursHand.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
        minutesHand.style.transform = `rotateZ(${minutes}deg)`
        secondsHand.style.transform = `rotateZ(${seconds}deg)`
    }, 0)
}

startTime();
