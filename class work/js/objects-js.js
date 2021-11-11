const userId = document.getElementById('user-id');
const id = document.getElementById('id');
const title = document.getElementById('title');
const isCompleted = document.getElementById('is-completed');
const toDoList = document.getElementById('done-form');
let todos = [];

const createButton = document.getElementById('button');

function createObj () {
    const toDoBox = {};
    toDoBox['userId'] = userId.value;
    toDoBox['id'] = id.value;
    toDoBox['title'] = title.value;
    toDoBox['isCompleted'] = isCompleted.value;

    todos.push(toDoBox);
}

function render(arr, f) {
    let str = '';
    
    for (let i = 0; i < arr.length; i++) {
        str += `<div class="to-do">
                    <p>userId: ${arr[i].userId}</p>
                    <p>id: ${arr[i].id}</p>
                    <p>title: ${arr[i].title}</p>
                    <p>completed: ${arr[i].isCompleted}</p>
                    <button onclick="deleteBox(${arr[i].id})">delete</button>
                </div>`
    }

    toDoList.innerHTML = str;
}

function deleteBox(id) { 
    console.log(id);

    let result = todos.filter(el => +el.id !== id);
    console.log(result);
    todos = result;
    render(todos)

}
  
function sort(arr) {

    function byField(field, direction) {
       return direction === 'desc' ? 
       (a, b) => a[field] < b[field] ? 1 : -1 : 
       (a, b) => a[field] > b[field] ? 1 : -1;
      };

      const select = document.getElementById('select');
      const selectedOption = select.options[select.selectedIndex];

      arr.sort(byField(selectedOption.dataset.fieldName, selectedOption.dataset.direction));
    
    render(arr);

}
