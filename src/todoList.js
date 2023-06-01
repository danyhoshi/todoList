export function addTask(tasks, task) {
  if (task.description) {
    tasks.push(task);
    return true;
  } return false;
}

export function removeTask(tasks, index) {
  tasks.splice(index, 1);
}

export function editTask(tasks, index, nd) {
  tasks[index].description = nd;
}

export function editStatus(tasks, index, ns) {
  tasks[index].state = ns;
}
