const fs = require("fs");
const path = require("path");

const rootDir = require("../util/path");

const p = path.join(rootDir, "data", "custom-quotes.json");

const getQuotesFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

module.exports = class CustomQuote {
	constructor(quote) {
		this.title = quote.title;
		this.author = quote.author;
	}

	save() {
		fs.readFile(p, (err, fileContent) => {
			getQuotesFromFile((quotes) => {
				quotes.push(this);
				fs.writeFile(p, JSON.stringify(quotes), (err) => {
					console.log(err);
				});
			});
		});
	}

	static fetchAll(cb) {
		getQuotesFromFile(cb);
	}
};
