export default class Task {
    description;

    state;

    constructor(description, stat) {
      this.description = description;
      this.state = stat;
    }

    setStatus(stat) {
      this.state = stat;
    }

    setDescription(desc) {
      this.description = desc;
    }

    getStatus() {
      return this.state;
    }

    getDescription() {
      return this.description;
    }
}