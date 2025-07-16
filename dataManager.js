class dataManager {
  constructor() {
    this.data = {
      "tasks": {1: "Sample Task"}
    };
    this.idCounter = 0;
  }

  getTask() {
    return this.data.tasks;
  }

  getTaskById(id) {
    return this.data.tasks[id] || null;
  }

  addTask(task) {
    const id = this.idCounter++;
    this.data.tasks[id] = task;
    return id;
  }

  deleteTask(id) {
    if (this.data.tasks[id]) {
      delete this.data.tasks[id];
      return true;
    }
    return false;
  }

  updateTask(id, updatedTask) {
    if (this.data.tasks[id]) {
      this.data.tasks[id] = updatedTask;
      return true;
    }
    return false;
  }
}

module.exports = dataManager;