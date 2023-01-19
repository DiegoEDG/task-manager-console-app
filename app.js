require('colors');
const { saveData, loadData } = require('./helpers/saveData');
const { mainMenu, pause, readDescription } = require('./menu');
const Tasks = require('./models/tasksModel');

const main = async () => {
	let option = '';
	const tasks = new Tasks();

	console.clear();

	if (loadData()) {
		const data = await loadData();
		tasks.loadDataToArray(data);
	}

	do {
		console.clear();
		option = await mainMenu();

		switch (option) {
			case '1':
				const description = await readDescription('Description: ');
				tasks.createTask(description);
				break;
			case '2':
				tasks.showTaskList(tasks.taskListArr);
				break;
			case '3':
				tasks.showCompletedTask(tasks.taskListArr);
				break;
			case '4':
				tasks.showPendingTask(tasks.taskListArr);
				break;
		}

		saveData(tasks.taskListArr);

		await pause();
	} while (option !== '0');
};

main();
