//assigning
const todoForm = document.getElementById('to_dos');
const todoList = document.getElementById('list_of_todo');
const addInput = document.getElementById('addInput');


const todo = [];

const render_element=document.getElementById('lists_of_todo');


addInput.addEventListener('submit', function(event){
      event.preventDefault();

      const todoText= addInput.value;

      const todoItem = {
        id: Date.now(),
        text: todoText,
        is_complete: false,
        is_deleted: false,
        due_date: null,
        description: '',
    }
      if(todoText){
        todo.push(todoItem);
      }
    })
  



//const valueElement = document.createElement('span');
//valueElement.innerText = input;
//lists_of_todo.appendChild(divElement);