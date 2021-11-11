const userName = document.getElementById('user-name');
const userId = document.getElementById('user-id');
const isCompleted = document.getElementById('is-completed');
const createButton = document.getElementById('form-button');
let taskList = [];
const taskListOutput = document.getElementById('task-list');

function createObject() {
    let object = {};
    object['userName'] = userName.value;
    object['userId'] = userId.value;
    object['isCompleted'] = isCompleted.value;

    taskList.push(object);
}

function render(arr, createFunction) {
    let str = '';

    for (let i = 0; i < arr.length; i++) {
        str += `<div class="task-box">
                    <p>user name: ${arr[i].userName}</p>
                    <p>user id: ${arr[i].userId}</p>
                    <p>is completed: ${arr[i].isCompleted}</p>
                    <button class="delete-button" onclick="deleteObject(${arr[i].userId})">удалить</button>
                </div>`
    }

    taskListOutput.innerHTML = str;
}

function deleteObject(id) {
    let newtaskList = taskList.filter((el) => Number(el.userId) !== id);
    taskList = newtaskList;
    render(taskList)
}


function sort() {
    const select = document.getElementById('sort-select');
    const selectedOption = select.options[select.selectedIndex];
    console.log(selectedOption);

    function byField(fieldName, direction) {
        if (direction === 'descending') {
            return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1
        } else {
            return (a, b) => a[fieldName] < b[fieldName] ? 1 : -1
        }
    }

    taskList.sort(byField(selectedOption.dataset.fieldName, selectedOption.dataset.direction));

    render(taskList)
}

console.log('y'.charCodeAt())
console.log('n'.charCodeAt())
