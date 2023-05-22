export default class TodoList {
    tasks;

    constructor() {
      this.tasks = [];
    }

    addTask(task) {
      this.tasks.push(task);
    }

    removeTask(task) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    }

    getTasks() {
      return this.tasks;
    }

  // removeTask(taskid) {

  // }
}