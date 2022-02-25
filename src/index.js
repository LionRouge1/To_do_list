import './style.css';
import TDlist from './TDlist.js';
import { checkbox as checkBox, clearAll } from './interactive.js';

if (localStorage.getItem('list') !== null) {
  const list = JSON.parse(localStorage.getItem('list'));
  TDlist.displayList(list);
}

const description = document.querySelectorAll('.description');

const getFocus = (event) => {
  const li = event.target.parentNode;
  const ellips = event.target.nextElementSibling;
  const trash = ellips.nextElementSibling;
  event.target.style.textDecoration = 'none';

  li.style.backgroundColor = '#ffe24370';
  ellips.style.visibility = 'hidden';
  trash.style.visibility = 'visible';
};

const lostFocus = (event) => {
  const li = event.target.parentNode;
  const ellips = event.target.nextElementSibling;
  const trash = ellips.nextElementSibling;
  const checks = event.target.previousElementSibling.getAttribute('completed');
  
  if (checks === 'false'){
    event.target.style.textDecoration = '';
  }else {
    event.target.style.textDecoration = 'line-through';
  }
 

  li.style.backgroundColor = '';
  ellips.style.visibility = 'visible';
  trash.style.visibility = 'hidden';
};

description.forEach((element) => {
  element.addEventListener('focus', getFocus);
  element.addEventListener('blur', lostFocus);
});

//  edit task

description.forEach((element) => {
  element.addEventListener('change', (event) => {
    const task = new TDlist();
    task.editTask(Number(event.target.id) - 1, event.target.value);
  });
});

// add task

const form = document.getElementById('sub_form');
const Nitem = document.getElementById('new-item');
const submit = (event) => {
  if (Nitem.value === '') {
    event.preventDefault();
  } else {
    const task = new TDlist(false, Nitem.value);
    task.addTask();
  }
};
form.addEventListener('submit', submit);

// Remove task

const trash = document.querySelectorAll('.trash');
trash.forEach((element) => {
  element.addEventListener('click', function (event) {
    event.stopImmediatePropagation();
    const index = this.parentNode.getAttribute('index');
    const task = new TDlist();
    task.removeTask(Number(index));
  });
});

// checkbox

const checkbox = document.querySelectorAll('.checkbox');

checkbox.forEach((element) => {
  element.addEventListener('click', function() {
    checkBox(this);
  })
});

// Clear all task

const All =document.getElementById('clear');

All.addEventListener('click', clearAll);
