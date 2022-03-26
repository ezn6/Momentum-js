const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

function wirteTodoSubmit(event) {
  event.preventDefault();
  const todo = document.createElement('li');
  todoList.appendChild(todo);
  todo.innerText = todoInput.value;
  todoInput.value = '';
}

todoForm.addEventListener('submit', wirteTodoSubmit);
