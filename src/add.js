import { addTask } from './todoList.js';
import { printTask } from './print.js';

function add(e, tdL) {
  if (e.key === 'Enter') {
    const input = document.querySelector('.in');
    const tsk = { description: e.target.value, state: false };
    if (addTask(tdL, tsk)) {
      const clearAll = document.querySelector('.clearAll');
      localStorage.setItem('tasks', JSON.stringify(tdL));
      clearAll.insertAdjacentElement('beforebegin', printTask(tsk, tdL.length - 1));
    }
    input.value = '';
  }
}

export default add;