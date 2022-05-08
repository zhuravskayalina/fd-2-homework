"use strict";

function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
    let colors = ['красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
    let resultColors = [];
    console.log(`количество цветов: ${colorsCount}`);

    for (let i = 0; i < colorsCount; i++) {
        let n = randomDiap(0, 6);
        let colorName = colors[n];
        while (resultColors.includes(colorName)) {
            colorName = colors[randomDiap(0, 6)];
        }
        console.log(colorName);
        resultColors.push(colorName);
    }
    console.log('---------');
}
for (let i = 0; i < 100; i++) {
    mood(3);
}
