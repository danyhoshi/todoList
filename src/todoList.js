export default class TodoList {
    tasks;

    constructor() {
      this.tasks = [];
    }

    addTask(task) {
      this.tasks.push(task);
    }

    removeTask(index) {
      this.tasks.splice(index, 1);
    }

    editTask(index, nd) {
      this.tasks[index].description = nd;
    }

    editStatus(index, ns) {
      this.tasks[index].state = ns;
    }

    getTasks() {
      return this.tasks;
    }

  // removeTask(taskid) {

  // }
}