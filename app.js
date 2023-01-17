require('colors');
const { mainMenu, pause } = require('./menu');

const main = async () => {
	let option = '';

	do {
		option = await mainMenu();
		console.log({ option });

		await pause();
	} while (option !== '0');
};

main();
