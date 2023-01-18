require('colors');
const saveData = require('./helpers/saveData');
const { mainMenu, pause, readDescription } = require('./menu');
const Tasks = require('./models/tasksModel');

const main = async () => {
	let option = '';
	const tasks = new Tasks();

	do {
		console.clear();
		option = await mainMenu();
		console.log(option);

		switch (option) {
			case '1':
				const description = await readDescription('Description: ');
				tasks.createTask(description);
				break;
			case '2':
				console.log(tasks.taskListArr);
				break;
		}

		saveData(tasks.taskListArr);

		await pause();
	} while (option !== '0');
};

main();
