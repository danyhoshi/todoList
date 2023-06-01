import { addTask } from '../todoList.js';
import add from '../add.js';
import doc from './helper/index_mock.js';
import tasksMock from './helper/tasks_mock.js';
import { printTasks } from '../print.js';
import trash from '../imgs/delete.svg';
import clearOne from '../clear.js';

describe('Task suite Add and Delete Task', () => {
  test('Should be add one task to DOM, addTask method', () => {
    document.body.innerHTML = doc;
    const input = document.querySelector('.in');
    const tasks = [];
    input.value = 'First task';
    input.addEventListener('keyup', (event) => add(event, tasks));
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    input.dispatchEvent(event);
    const inTsk = document.querySelectorAll('.inTask').length;
    expect(inTsk).toEqual(1);
  });

  test('Using addTask should be increases size of li array in DOM by 1', () => {
    document.body.innerHTML = doc;
    const input = document.querySelector('.in');
    const tasks = [...tasksMock];
    printTasks(tasks);
    const lengthBefore = document.querySelectorAll('.inTask').length;

    input.value = 'One task more';
    input.addEventListener('keyup', (event) => add(event, tasks));
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    input.dispatchEvent(event);

    const lengthAfter = document.querySelectorAll('.inTask').length;
    expect(lengthAfter).toBe(lengthBefore + 1);
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

  test('Should be delete one task to DOM, deleteTask method', () => {
    document.body.innerHTML = doc;
    const tasks = [...tasksMock];
    printTasks(tasks);
    const lengthBefore = document.querySelectorAll('.inTask').length;
    const img = document.querySelectorAll('img');
    img[1].src = trash;
    img[1].alt = 'delete';
    document.addEventListener('click', (event) => clearOne(event, tasks));
    img[1].click();
    const lengthAfter = document.querySelectorAll('.inTask').length;
    expect(lengthAfter).toBe(lengthBefore - 1);
  });

  test('Empty description does not add anything to DOM', () => {
    document.body.innerHTML = doc;
    const input = document.querySelector('.in');
    const tasks = [...tasksMock];
    printTasks(tasks);
    const lengthBefore = document.querySelectorAll('.inTask').length;
    input.addEventListener('keyup', (event) => add(event, tasks));
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    input.dispatchEvent(event);
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