const { v4: uuidv4 } = require('uuid');

class Task {
	id = '';
	description = '';
	complationdDate = null;

	constructor(description) {
		this.id = uuidv4();
		this.description = description;
		this.complationdDate = null;
	}
}

module.exports = Task;
