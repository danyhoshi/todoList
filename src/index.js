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

const button = document.querySelector('button');

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
  // console.log('What are you doing?');
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
    inputCheck.check = element.state;
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

function printTasksFrom(tasks, idR) {
  // console.log('What are you doing?');
  tasks.forEach((element, index) => {
    if (index >= idR) {
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
      inputCheck.check = element.state;
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
    // console.log('What are you doing?');
    }
  });
}

function clear(indexR) {
  document.querySelectorAll('.containerTodo > div').forEach((element, index) => {
    if (index > 1 + indexR) {
      element.remove();
    }
  });
}
function clearSelected() {
  document.querySelectorAll('.containerTodo > div').forEach((element, index) => {
    if (index > 1) {
      element.remove();
    }
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
    tdL.addTask(new Task('Wash my dog...', false));
    tdL.addTask(new Task('Complete To Do List Project', false));
    tdL.addTask(new Task('Fix car ', false));
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
      const idTask = parseInt(check.name.slice(4), 10);
      tdL.editStatus(idTask, check.checked);
      localStorage.setItem('tasks', JSON.stringify(tdL.getTasks()));
    } else {
      tskD.classList.remove('checked');
      const idTask = parseInt(check.name.slice(4), 10);
      tdL.editStatus(idTask, check.checked);
      localStorage.setItem('tasks', JSON.stringify(tdL.getTasks()));
    }
  } else {
    return false;
  }
  return true;
});

document.addEventListener('click', (e) => {
  const taskR = e.target;
  if (e.target.matches('img[alt=\'delete\']')) {
    const tskD = taskR.parentElement.previousElementSibling.firstElementChild.id;
    const idTask = parseInt(tskD.slice(4), 10);
    tdL.removeTask(idTask);
    localStorage.setItem('tasks', JSON.stringify(tdL.getTasks()));
    clear(idTask);
    printTasksFrom(tdL.getTasks(), idTask);
    // tdL.getTasks().forEach((element, index) => {
    //   console.log(element.description, element.state, index);
    // });
  }
});
button.addEventListener('click', () => {
  const taskR = tdL.getTasks().filter((task) => !task.state);
  tdL.tasks = taskR;
  localStorage.setItem('tasks', JSON.stringify(taskR));
  clearSelected();
  printTasks(tdL.getTasks());
});

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const tsk = new Task(e.target.value, false); // default false
    tdL.addTask(tsk);
    // const tareas = tdL.getTasks();
    localStorage.setItem('tasks', JSON.stringify(tdL.getTasks()));
    // console.log(localStorage.getItem('tasks'));
    // console.log(`GetTask${tdL.getTasks().length}`);
    // tareas.forEach((element, index) => {
    //   console.log(element.description, element.state, index);
    // });
    clearAll.insertAdjacentElement('beforebegin', printTask(tsk, tdL.getTasks().length - 1));
    input.value = '';
  }
  return true;
});

document.addEventListener('input', (e) => {
  const taskEdit = e.target;
  if (!e.target.matches('.inTask')) { return false; }

  const idTask = parseInt(taskEdit.name.slice(5), 10);
  tdL.editTask(idTask, e.target.value);
  localStorage.setItem('tasks', JSON.stringify(tdL.getTasks()));

  return true;
});

document.addEventListener('click', (e) => {
  const taskEdit = e.target;
  const imgs = document.querySelectorAll('.container-svg img');
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
  } else {
    return false;
  }
  return true;
});

document.addEventListener('change', (e) => {
  const taskEdit = e.target;
  if (e.target.matches('.inTask')) {
    taskEdit.parentElement.nextElementSibling.firstElementChild.setAttribute('alt', 'edit');
    taskEdit.parentElement.nextElementSibling.firstElementChild.setAttribute('src', moreVert);
  } else {
    return false;
  }
  return true;
});
