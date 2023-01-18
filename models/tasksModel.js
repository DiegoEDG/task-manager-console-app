const Task = require('./taskModel');

class Tasks {
	_taskList = {};

	get taskListArr() {
		const listArr = [];

		Object.keys(this._taskList).forEach((key) => {
			const task = this._taskList[key];
			listArr.push(task);
		});

		return listArr;
	}

	constructor() {
		this._taskList = {};
	}

	createTask(description) {
		const newTask = new Task(description);
		this._taskList[newTask.id] = newTask;
	}
}

module.exports = Tasks;
