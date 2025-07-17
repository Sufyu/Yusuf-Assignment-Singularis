class dataManager {
  constructor() {
    this.data = {
      "tasks": []
    };
    this.idCounter = 0;
  }

  getTask() {
    return this.data.tasks;
  }

  getTaskById(id) {
    return this.data.tasks.find(task => task.id === id) || null;
  }

  addTask(task) {
    const id = this.idCounter++;
    this.data.tasks.push({id: id, task: task});
    return id;
  }

  deleteTask(id) {
    const index = this.data.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.data.tasks.splice(index, 1);
      return true;
    }
    return false;
  }

  updateTask(id, updatedTask) {
    const index = this.data.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.data.tasks[index] = {id: id, task: updatedTask};
      return true;
    }
    return false;
  }
}

module.exports = dataManager;