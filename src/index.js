import './style.css';
import {
  addTask, removeTask, editTask, editStatus,
} from './todoList.js';
import { printTask, printTasks, printTasksFrom } from './print.js';
import { clearSelected, clear } from './clears.js';
import sinc from './imgs/sinc.svg';
import moreVert from './imgs/more_vert.svg';
import trash from './imgs/delete.svg';

let tdL = [];
const input = document.querySelector('.in');

const img = document.querySelectorAll('.container-svg img');

const clearAll = document.querySelector('.clearAll');

const button = document.querySelector('button');

img.forEach((element, index) => {
  if (index !== 0) { element.setAttribute('src', moreVert); } else { element.setAttribute('src', sinc); }
  element.setAttribute('width', 35);
  element.setAttribute('height', 35);
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('tasks')) {
    tdL = JSON.parse(localStorage.getItem('tasks'));
    printTasks(tdL);
  } else {
    tdL = [{
      description: 'Wash my dog...',
      state: false,
    },
    {
      description: 'Complete To Do List Project',
      state: false,
    },
    {
      description: 'Fix car ',
      state: false,
    },
    ];
    localStorage.setItem('tasks', JSON.stringify(tdL));
    printTasks(tdL);
  }
});

document.addEventListener('change', (e) => {
  const check = e.target;
  if (e.target.type === 'checkbox') {
    const tskD = document.querySelector(`input[name='t${check.name}']`);
    if (check.checked) {
      tskD.classList.add('checked');
      const idTask = parseInt(check.name.slice(4), 10);
      editStatus(tdL, idTask, check.checked);
      localStorage.setItem('tasks', JSON.stringify(tdL));
    } else {
      tskD.classList.remove('checked');
      const idTask = parseInt(check.name.slice(4), 10);
      editStatus(tdL, idTask, check.checked);
      localStorage.setItem('tasks', JSON.stringify(tdL));
    }
  }
});

document.addEventListener('click', (e) => {
  const taskR = e.target;
  if (e.target.matches('img[alt=\'delete\']')) {
    const tskD = taskR.parentElement.previousElementSibling.firstElementChild.id;
    const idTask = parseInt(tskD.slice(4), 10);
    removeTask(tdL, idTask);
    localStorage.setItem('tasks', JSON.stringify(tdL));
    clear(idTask);
    printTasksFrom(tdL, idTask);
  }
});

button.addEventListener('click', () => {
  tdL = tdL.filter((task) => !task.state);

  localStorage.setItem('tasks', JSON.stringify(tdL));
  clearSelected();
  printTasks(tdL);
});

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    if (e.target.value) {
      const tsk = { description: e.target.value, state: false };
      addTask(tdL, tsk);
      localStorage.setItem('tasks', JSON.stringify(tdL));
      clearAll.insertAdjacentElement('beforebegin', printTask(tsk, tdL.length - 1));
      input.value = '';
    }
  }
});

document.addEventListener('input', (e) => {
  const taskEdit = e.target;
  if (!e.target.matches('.inTask')) { return false; }
  const idTask = parseInt(taskEdit.name.slice(5), 10);
  editTask(tdL, idTask, e.target.value);
  localStorage.setItem('tasks', JSON.stringify(tdL));

  return true;
});

document.addEventListener('click', (e) => {
  const taskEdit = e.target;
  const imgs = document.querySelectorAll('.container-svg img');
  const cont = document.querySelectorAll('.checkbox');
  if (e.target.matches('.inTask')) {
    const idTask = parseInt(taskEdit.name.slice(5), 10);
    imgs.forEach((e, index) => {
      if (index > 0) {
        if (index - 1 === idTask) {
          e.setAttribute('alt', 'delete');
          e.setAttribute('src', trash);
        } else {
          e.setAttribute('alt', 'edit');
          e.setAttribute('src', moreVert);
        }
      }
    });
    cont.forEach((e, index) => {
      if (index === idTask) { e.classList.add('yellow'); } else { e.classList.remove('yellow'); }
    });
  } else {
    cont.forEach((e) => { e.classList.remove('yellow'); });
    imgs.forEach((e, index) => {
      if (index > 0) {
        e.setAttribute('alt', 'edit');
        e.setAttribute('src', moreVert);
      }
    });
  }
});
