export default class Task {
    description;

    state;

    constructor(description) {
      this.description = description;
      this.state = false;
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