import moreVert from './imgs/more_vert.svg';

const clearAll = document.querySelector('.clearAll');

export function printTask(element, index) {
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
  if (element.state) {
    inputTask.classList.add('checked');
  }
  inputTask.value = element.description;
  inputTask.setAttribute('name', `ttask${index}`);
  inputTask.classList.add('inTask');
  divSvg.classList.add('container-svg');
  svg.setAttribute('src', moreVert);
  svg.setAttribute('alt', 'edit');
  svg.setAttribute('width', 35);
  svg.setAttribute('height', 35);
  divC.appendChild(inputCheck);
  divC.appendChild(inputTask);
  div.appendChild(divC);
  divSvg.appendChild(svg);
  div.appendChild(divSvg);
  return div;
}

export function printTasks(tasks) {
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
    if (element.state) {
      inputTask.classList.add('checked');
    }
    inputTask.value = element.description;
    inputTask.setAttribute('name', `ttask${index}`);
    inputTask.classList.add('inTask');
    divSvg.classList.add('container-svg');
    svg.setAttribute('src', moreVert);
    svg.setAttribute('alt', 'edit');
    svg.setAttribute('width', 35);
    svg.setAttribute('height', 35);
    divC.appendChild(inputCheck);
    divC.appendChild(inputTask);
    div.appendChild(divC);
    divSvg.appendChild(svg);
    div.appendChild(divSvg);
    clearAll.insertAdjacentElement('beforebegin', div);
  });
}

export function printTasksFrom(tasks, idR) {
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
      inputCheck.checked = element.state;
      if (element.state) {
        inputTask.classList.add('checked');
      }
      inputTask.value = element.description;
      inputTask.setAttribute('name', `ttask${index}`);
      inputTask.classList.add('inTask');
      divSvg.classList.add('container-svg');
      svg.setAttribute('src', moreVert);
      svg.setAttribute('alt', 'edit');
      svg.setAttribute('width', 35);
      svg.setAttribute('height', 35);
      divC.appendChild(inputCheck);
      divC.appendChild(inputTask);
      div.appendChild(divC);
      divSvg.appendChild(svg);
      div.appendChild(divSvg);
      clearAll.insertAdjacentElement('beforebegin', div);
    }
  });
}