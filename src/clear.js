import { clear } from './clears.js';
import { removeTask } from './todoList.js';
import { printTasksFrom } from './print.js';

function clearOne(e, tdL) {
  const taskR = e.target;
  if (e.target.matches('img[alt=\'delete\']')) {
    const tskD = taskR.parentElement.previousElementSibling.firstElementChild.id;
    const idTask = parseInt(tskD.slice(4), 10);
    removeTask(tdL, idTask);
    localStorage.setItem('tasks', JSON.stringify(tdL));
    clear(idTask);
    printTasksFrom(tdL, idTask);
  }
}

export default clearOne;