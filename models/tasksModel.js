const Task = require('./taskModel');
require('colors');

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

	loadDataToArray(data) {
		data.forEach((task) => {
			this._taskList[task.id] = task;
		});
	}

	showTaskList(tasks) {
		console.log();
		tasks.forEach((task, key) => {
			const index = `${key + 1}. `.magenta;
			console.log(`${index}${task.description} :: ${task.complationDate ? 'Completed'.green : 'Pending'.red}`);
		});
	}

	showCompletedTask(tasks) {
		console.log();
		tasks.forEach((task, key) => {
			const index = `${key + 1}. `.magenta;
			if (task.complationDate) {
				console.log(`${index} ${task.description} :: ${task.complationDate.green}`);
			}
		});
	}

	showPendingTask(tasks) {
		console.log();
		tasks.forEach((task, key) => {
			const index = `${key + 1}. `.magenta;
			if (!task.complationDate) {
				console.log(`${index} ${task.description}`.red);
			}
		});
	}

	checkCompletedTask = (ids) => {
		ids.forEach((id) => {
			const tarea = this._taskList[id];
			if (!tarea.complationDate) {
				tarea.complationDate = new Date().toISOString().slice(0, 10);
			}
		});

		this.taskListArr.forEach((task) => {
			if (!ids.includes(task.id)) {
				this._taskList[task.id].complationDate = null;
			}
		});
	};

	deleteTask(id) {
		if (this._taskList[id]) {
			delete this._taskList[id];
		}
	}
}

module.exports = Tasks;
