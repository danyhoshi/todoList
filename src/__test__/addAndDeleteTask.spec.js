import { addTask, removeTask } from '../todoList.js';
import doc from './helper/index_mock.js';
import tasksMock from './helper/tasks_mock.js';
import { printTask, printTasks, printTasksFrom } from '../print.js';
import { clear } from '../clears.js';

describe('Task suite Add and Delete Task', () => {
  //   test('displays', () => {
  //     // Set up our document body
  //     document.body.innerHTML = "<div> </div>";

  //       type();
  //       const h1 = document.querySelector('h1');
  //       expect(h1.textContent).toBe('Hey you');
  // });

  test('should be add one task to DOM, addTask method', () => {
    document.body.innerHTML = doc;
    const clearAll = document.querySelector('.clearAll');
    // const event = new KeyboardEvent('keydown', { key: 'Enter' });
    // input.dispatchEvent(event);
    const tasks = [];
    const task = {
      description: 'Test 1',
      state: false,
    };
    addTask(tasks, task);
    clearAll.insertAdjacentElement('beforebegin', printTask(task, tasks.length - 1));
    const inTsk = document.querySelector('.inTask');
    expect(inTsk.value).toEqual(task.description);
  });

  test('using addTask should be increases size of li array in DOM by 1, addTask method', () => {
    document.body.innerHTML = doc;
    const clearAll = document.querySelector('.clearAll');
    // const event = new KeyboardEvent('keydown', { key: 'Enter' });
    // input.dispatchEvent(event);
    const tasks = [];
    const task = {
      description: 'Test 1',
      state: false,
    };
    addTask(tasks, task);
    clearAll.insertAdjacentElement('beforebegin', printTask(task, tasks.length - 1));
    const inTsk = document.querySelectorAll('.inTask');
    expect(inTsk.length).toBe(1);
  });

  test('Should be add an item, addTask method', () => {
    const tasks = [];
    const task = {
      description: 'Description 0',
      state: false,
    };
    addTask(tasks, task);
    expect(tasks.length).toBe(1);
  });

  test('should be delete one task to DOM, deleteTask method', () => {
    document.body.innerHTML = doc;
    const tasks = [...tasksMock];
    printTasks(tasks);
    const lengthBefore = document.querySelectorAll('.inTask').length;
    removeTask(tasks, 4);
    clear(4);
    printTasksFrom(tasks, 4);
    const lengthAfter = document.querySelectorAll('.inTask').length;
    expect(lengthAfter).toBe(lengthBefore - 1);
  });

  test('Empty description does not add anything to DOM', () => {
    document.body.innerHTML = doc;
    const clearAll = document.querySelector('.clearAll');
    const tasks = [...tasksMock];
    printTasks(tasks);
    const lengthBefore = document.querySelectorAll('.inTask').length;
    const tsk = {
      description: '',
      state: false,
    };

    if (addTask(tasks, tsk)) { clearAll.insertAdjacentElement('beforebegin', printTask(tsk, tasks.length - 1)); }

    const lengthAfter = document.querySelectorAll('.inTask').length;
    expect(lengthAfter).toBe(lengthBefore);
  });
});

// test('Check addTodo able add todo to todoList', () => {
//     document.body.innerHTML = `
//       <input id="newTodoInput" />
//       <button id="addTodoBtn">Add todo</button>
//       <ol id="todoList"></ol>
//     `;
//     require('../todolist.js');

//     const newTodoInput = document.getElementById('newTodoInput');
//     const addTodoBtn = document.getElementById('addTodoBtn');
//     const todolist = document.getElementById('todoList');

//     newTodoInput.value = 'New todolist!';
//     addTodoBtn.click();

//     expect(todolist.innerHTML)