import Task from './task.js';
import TodoList from './todoList.js';
import './style.css';
import sinc from './imgs/sinc.svg';
import moreVert from './imgs/more_vert.svg';

const tdL = new TodoList();
const input = document.querySelector('.in');

const img = document.querySelectorAll('.container-svg img');

img.forEach((element) => {
  element.setAttribute('src', moreVert);
});

document.querySelector('img[alt=reload]').setAttribute('src', sinc);

document.addEventListener('change', (e) => {
  const check = e.target;
  if (e.target.type === 'checkbox') {
    const tskD = document.querySelector(`label[for='${check.name}']`);
    if (check.checked) {
      tskD.classList.add('checked');
      console.log(`Task selected: ${tskD.textContent}`);
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