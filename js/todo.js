const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

function wirteTodoSubmit(event) {
  event.preventDefault();
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = todoInput.value;
  const button = document.createElement('button');
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  button.innerText = '❌';
  todoInput.value = '';
  button.addEventListener('click', () => {
    todoList.removeChild(li);
  });
}

todoForm.addEventListener('submit', wirteTodoSubmit);
