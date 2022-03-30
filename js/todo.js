const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todo';
let todos = [];

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  // li.className = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  button.innerText = '❌';
  button.addEventListener('click', () => {
    todoList.removeChild(li);
    console.log(li.id);
    todos = todos.filter((i) => i.id !== li.id);
    console.log(todos);
    // saveTodo();
  });
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  paintTodo(newTodoObj);
  //
  todos.push(newTodoObj);
  saveTodo();
  //
  todoInput.value = '';
}

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach((i) => paintTodo(i));
}
