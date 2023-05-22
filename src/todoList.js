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

    editTask(index, nd) {
      this.tasks[index].description = nd;
    }

    getTasks() {
      return this.tasks;
    }

  // removeTask(taskid) {

  // }
}