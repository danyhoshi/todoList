import Task from './task.js';
import TodoList from './todoList.js';
import './style.css';
import sinc from './imgs/sinc.svg';
import moreVert from './imgs/more_vert.svg';

const tdL = new TodoList();
const label = document.querySelector('label');
const checkbox = document.querySelector('input[type=checkbox]');
const input = document.querySelector('input[type=text]');
document.querySelector('img[alt=reload]').setAttribute('src', sinc);
document.querySelector('img[alt=edit]').setAttribute('src', moreVert);

checkbox.addEventListener('change', (e) => {
  const check = e.target;
  console.log(check.checked);
  const tskD = document.querySelector(`label[for='${check.name}']`);
  // console.log(tskD);
  if (check.checked) {
    label.classList.add('checked');
    console.log(`Tarea seleccionada: ${tskD.textContent}`);
  } else {
    label.classList.remove('checked');
  }
});

input.addEventListener('keyup', (e) => {
  // console.log(e.target.value);
  if (e.key === 'Enter') {
    const tsk = new Task(e.target.value); // false por defecto
    // console.log('desde tsk: ' + tsk.description);
    // console.log(tsk.description, tsk.state);
    tdL.addTask(tsk);
    const tareas = tdL.getTasks();
    tareas.forEach((element, index) => {
      console.log(element.description, element.state, index);
    });
  }
});