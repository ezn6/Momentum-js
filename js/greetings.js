const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting();
}

function paintGreeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username} :)`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting();
}
