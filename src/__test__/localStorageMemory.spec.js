import { beforeEach } from 'node:test';
import add from '../add.js';
import doc from './helper/index_mock.js';
import tasksMock from './helper/tasks_mock.js';
import { printTasks } from '../print.js';

beforeEach(() => {
  localStorage.clear();
});

describe('Task suite localStorage memory', () => {
  test('Should save to localStorage', () => {
    document.body.innerHTML = doc;
    const input = document.querySelector('.in');
    const tasks = [...tasksMock];
    printTasks(tasks);

    input.value = 'One task more';
    input.addEventListener('keyup', (event) => add(event, tasks));
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    input.dispatchEvent(event);
    let exist = false;
    if (localStorage.getItem('tasks')) { exist = true; }

    expect(exist).toBe(true);
  });

  test('"savedTasks" array should be saved in localStorage', () => {
    document.body.innerHTML = doc;
    const input = document.querySelector('.in');
    const tasks = [...tasksMock];
    printTasks(tasks);

    input.value = 'One task more';
    input.addEventListener('keyup', (event) => add(event, tasks));
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    input.dispatchEvent(event);
    expect(localStorage.getItem('tasks')).toBe(JSON.stringify(tasks));
  });
});