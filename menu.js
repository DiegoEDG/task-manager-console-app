require('colors');
const inquirer = require('inquirer');

const menuOptions = [
	{
		type: 'list',
		name: 'Option',
		message: 'What do you want to do?',
		choices: [
			{
				value: '1',
				name: '1. New Task'
			},
			{
				value: '2',
				name: '2. List Tasks'
			},
			{
				value: '3',
				name: '3. Completed Tasks'
			},
			{
				value: '4',
				name: '4. Pending Tasks'
			},
			{
				value: '5',
				name: '5. Mark Task as completed'
			},
			{
				value: '6',
				name: '6. Delete Tasks'
			},
			{
				value: '0',
				name: '0. Exit'
			}
		]
	}
];

const mainMenu = async () => {
	console.log('================================'.green);
	console.log('       Choose an option'.green);
	console.log('================================\n'.green);

	const { Option } = await inquirer.prompt(menuOptions);
	return Option;
};

const pause = async () => {
	const pauseQuestion = {
		type: 'input',
		name: 'enter',
		message: `Press ${'ENTER'.green} to continue`
	};

	console.log('\n');

	await inquirer.prompt(pauseQuestion);
};

const readDescription = async (message) => {
	const rdQuestion = [
		{
			type: 'input',
			name: 'description',
			message,
			validate(value) {
				if (value.length === 0) {
					return 'Write a description';
				}
				return true;
			}
		}
	];

	const { description } = await inquirer.prompt(rdQuestion);
	return description;
};

const deleteTask = async (tasks) => {
	const choices = tasks.map((task, index) => {
		const idx = index + 1;

		return {
			value: task.id,
			name: `${idx}. ${task.description}`
		};
	});

	choices.unshift({
		value: '0',
		name: '0. Cancel'
	});

	const deleteQuestion = {
		type: 'list',
		name: 'id',
		message: `Choose a task to delete`,
		choices
	};
	const { id } = await inquirer.prompt(deleteQuestion);
	return id;
};

const confirmDeleteQuestion = async (message) => {
	const confirmDeleteQ = {
		type: 'confirm',
		name: 'ok',
		message
	};

	const { ok } = await inquirer.prompt(confirmDeleteQ);
	return ok;
};

module.exports = {
	mainMenu,
	pause,
	readDescription,
	deleteTask,
	confirmDeleteQuestion
};
