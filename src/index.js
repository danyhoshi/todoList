import Task from './task.js';
import TodoList from './todoList.js';
import './style.css';
import sinc from './imgs/sinc.svg';
import moreVert from './imgs/more_vert.svg';

const tdL = new TodoList();
const input = document.querySelector('.in');

const img = document.querySelectorAll('.container-svg img');

const clearAll = document.querySelector('.clearAll');

function printTasks(element, index) {
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
  inputTask.setAttribute('name', `task${index}t`);
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

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('tasks')) {
    tdL.tasks = JSON.parse(localStorage.getItem('tasks'));
    tdL.tasks.forEach((element, index) => {
      console.log(element.description, element.state, index);
      clearAll.insertAdjacentElement('beforebegin', printTasks(element, index));
    });
  } else {
    // const tsk = new Task('Wash my dog...'); // false por defecto
    tdL.addTask(new Task('Wash my dog...'));
    tdL.addTask(new Task('Complete To Do List Project'));
    tdL.addTask(new Task('Fix car '));

    localStorage.setItem('tasks', JSON.stringify(tdL.getTasks()));
    console.log(localStorage.getItem('tasks'));
    console.log(`GetTask${tdL.getTasks().length}`);
    clearAll.insertAdjacentElement('beforebegin', printTasks(tdL.getTasks(), tdL.getTasks().length));
  }
});

img.forEach((element) => {
  element.setAttribute('src', moreVert);
});

document.querySelector('img[alt=reload]').setAttribute('src', sinc);

document.addEventListener('change', (e) => {
  const check = e.target;
  if (e.target.type === 'checkbox') {
    const tskD = document.querySelector(`input[name='${check.name}t']`);
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
    tareas.forEach((element, index) => {
      console.log(element.description, element.state, index);
    });
  }
});