import Task from './task.js';
import TodoList from './todoList.js';
import './style.css';
import sinc from './imgs/sinc.svg';
import moreVert from './imgs/more_vert.svg';
import trash from './imgs/delete.svg';

const tdL = new TodoList();
const input = document.querySelector('.in');

const img = document.querySelectorAll('.container-svg img');

const clearAll = document.querySelector('.clearAll');

function printTask(element, index) {
  const div = document.createElement('div');
  const divC = document.createElement('div');
  const inputCheck = document.createElement('input');
  const inputTask = document.createElement('input');
  const divSvg = document.createElement('div');
  const svg = document.createElement('img');
  divC.classList.add('checkbox');
  inputCheck.id = `task${index}`;
  inputCheck.type = 'checkbox';
  inputCheck.name = `task${index}`;
  inputCheck.checked = element.state;
  inputTask.value = element.description;
  inputTask.setAttribute('name', `ttask${index}`);
  inputTask.classList.add('inTask');
  divSvg.classList.add('container-svg');
  svg.setAttribute('src', moreVert);
  svg.setAttribute('alt', 'edit');
  divC.appendChild(inputCheck);
  divC.appendChild(inputTask);
  div.appendChild(divC);
  divSvg.appendChild(svg);
  div.appendChild(divSvg);
  return div;
}

function printTasks(tasks) {
  tasks.forEach((element, index) => {
    const div = document.createElement('div');
    const divC = document.createElement('div');
    const inputCheck = document.createElement('input');
    const inputTask = document.createElement('input');
    const divSvg = document.createElement('div');
    const svg = document.createElement('img');
    divC.classList.add('checkbox');
    inputCheck.id = `task${index}`;
    inputCheck.type = 'checkbox';
    inputCheck.name = `task${index}`;
    inputCheck.checked = element.state;
    inputTask.value = element.description;
    inputTask.setAttribute('name', `ttask${index}`);
    inputTask.classList.add('inTask');
    divSvg.classList.add('container-svg');
    svg.setAttribute('src', moreVert);
    svg.setAttribute('alt', 'edit');
    divC.appendChild(inputCheck);
    divC.appendChild(inputTask);
    div.appendChild(divC);
    divSvg.appendChild(svg);
    div.appendChild(divSvg);
    clearAll.insertAdjacentElement('beforebegin', div);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('tasks')) {
    tdL.tasks = JSON.parse(localStorage.getItem('tasks'));
    tdL.tasks.forEach((element, index) => {
      console.log(element.description, element.state, index);
    });
    printTasks(tdL.getTasks());
  } else {
    tdL.addTask(new Task('Wash my dog...'));
    tdL.addTask(new Task('Complete To Do List Project'));
    tdL.addTask(new Task('Fix car '));
    localStorage.setItem('tasks', JSON.stringify(tdL.getTasks()));
    console.log(localStorage.getItem('tasks'));
    console.log(`GetTask${tdL.getTasks().length}`);

    printTasks(tdL.getTasks());
  }
});

img.forEach((element) => {
  element.setAttribute('src', moreVert);
});

document.querySelector('img[alt=reload]').setAttribute('src', sinc);

document.addEventListener('change', (e) => {
  const check = e.target;
  if (e.target.type === 'checkbox') {
    const tskD = document.querySelector(`input[name='t${check.name}']`);
    if (check.checked) {
      tskD.classList.add('checked');
      console.log(`Task selected: ${tskD.value}`);
    } else {
      tskD.classList.remove('checked');
    }
  }
});

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const tsk = new Task(e.target.value); // default false
    tdL.addTask(tsk);
    const tareas = tdL.getTasks();
    localStorage.setItem('tasks', JSON.stringify(tdL.getTasks()));
    console.log(localStorage.getItem('tasks'));
    console.log(`GetTask${tdL.getTasks().length}`);
    tareas.forEach((element, index) => {
      console.log(element.description, element.state, index);
    });
    clearAll.insertAdjacentElement('beforebegin', printTask(tsk, tdL.getTasks().length - 1));
    input.value = '';
  }
});

document.addEventListener('input', (e) => {
  const taskEdit = e.target;
  if (e.target.matches('.inTask')) {
    const idTask = parseInt(taskEdit.name.slice(5), 10);
    tdL.editTask(idTask, e.target.value);
    localStorage.setItem('tasks', JSON.stringify(tdL.getTasks()));
    taskEdit.parentElement.nextElementSibling.firstElementChild.setAttribute('alt', 'delete');
    taskEdit.parentElement.nextElementSibling.firstElementChild.setAttribute('src', trash);
  }
});

document.addEventListener('change', (e) => {
  const taskEdit = e.target;
  if (e.target.matches('.inTask')) {
    taskEdit.parentElement.nextElementSibling.firstElementChild.setAttribute('alt', 'edit');
    taskEdit.parentElement.nextElementSibling.firstElementChild.setAttribute('src', moreVert);
  }
});
