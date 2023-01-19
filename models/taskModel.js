const { v4: uuidv4 } = require('uuid');

class Task {
	id = '';
	description = '';
	complationdDate = null;

	constructor(description) {
		this.id = uuidv4();
		this.description = description;
		this.complationDate = null;
	}
}

module.exports = Task;
