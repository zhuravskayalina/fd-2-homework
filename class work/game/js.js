const areaArr = [
    [0,0,0,0,0,0,2,0,0,1],
    [0,1,0,2,2,0,2,0,0,1],
    [0,1,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,2,2,2,0,0],
    [0,0,0,0,0,0,0,2,0,0],
    [0,0,1,0,0,2,0,2,0,0],
    [0,0,0,0,0,2,0,0,0,0],
    [0,2,2,0,0,0,0,1,1,0],
    [0,0,1,0,0,0,0,0,0,0],
    [1,0,0,0,0,2,0,0,0,1],
]
// img
const area = document.querySelector('.area');
const field0Src = 'img/grass.jpeg';
const field1Src = 'img/tree.png';
const field2Src = 'img/bricks.jpeg';

//sizes
const coefficient = 1;
const areaWidth = 500  * coefficient;
const areaHeight = 500 * coefficient;

const fieldWidth = '10%';
const fieldHeight = '10%';

area.style.width = areaWidth + 'px';
area.style.height = areaHeight + 'px';




areaArr.forEach(row => {
    row.forEach(cell => {
        switch (cell) {
            case 0:
                render(field0Src);
                break;
            case 1:
                render(field1Src);
                break;
            case 2:
                render(field2Src);
                break;
            case 3:
                render(characterSrc)
        }
    })
})

function render(fieldSrc) {
    const field = document.createElement('img');
    field.src = fieldSrc;
    field.style.width = fieldWidth;
    field.style.height = fieldHeight;
    area.append(field); 
}

// создаем персонажа 

const character = document.createElement('img');
character.src = 'img/mario.png';
character.style.height = fieldHeight;
character.style.width = fieldWidth;

character.style.position = 'absolute';
character.style.top = 0;
character.style.left = 0;
area.append(character);

// character coords

let x = 0;
let y = 0;

document.body.addEventListener('keydown', function(event) {
    const left = 'ArrowLeft';
    const up = 'ArrowUp';
    const right = 'ArrowRight';
    const down = 'ArrowDown';
    let coordsTop = parseFloat(character.style.top);
    let coordsLeft = parseFloat(character.style.left);  
    let nextX = x;
    let nextY = y;        
    
    function checkObstruction() {
        if (nextX < 0 || nextY < 0 || nextY > areaArr.length - 1) return true;
        return (areaArr[nextY][nextX] !== 0);
    }

        switch (event.key) {
                case left:
                    nextX = x - 1; console.log(`nextX ${nextX} , nextY ${nextY}`);
                    if (checkObstruction()) break;
                    if (coordsLeft <= 0) break;
                    --x;
                    character.style.left = coordsLeft - 50 + 'px';
                    break;
                case up: 
                    nextY = y - 1;console.log(`nextX ${nextX} , nextY ${nextY}`);
                    if (checkObstruction()) break;
                    if (coordsTop <= 0) break;
                    --y;
                    character.style.top = coordsTop - 50 + 'px';
                    break;
                case right: 
                    nextX = x + 1;console.log(`nextX ${nextX} , nextY ${nextY}`);
                    if (checkObstruction()) break;
                    if (coordsLeft >= areaWidth - character.offsetWidth) break;
                    ++x;
                    character.style.left = coordsLeft + 50 + 'px';
                    break;
                case down: 
                    nextY = y + 1;console.log(`nextX ${nextX} , nextY ${nextY}`);
                    if (checkObstruction()) break;
                    if (coordsTop >= areaHeight - character.offsetHeight) break;
                    ++y;
                    character.style.top = coordsTop + 50 + 'px';
                    break;
                }
    })
