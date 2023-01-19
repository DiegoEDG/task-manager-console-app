const fs = require('fs');

const filePath = './db/data.json';

const saveData = (data) => {
	fs.writeFileSync(filePath, JSON.stringify(data));
};

const loadData = () => {
	if (!fs.existsSync(filePath)) {
		return null;
	}

	const dataStr = fs.readFileSync(filePath, 'utf-8');
	const data = JSON.parse(dataStr);

	return data;
};

module.exports = {
	saveData,
	loadData
};
