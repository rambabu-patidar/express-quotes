const fs = require("fs");
const path = require("path");

const rootDir = require("../util/path");
const mathUtil = require("../util/math");

const URL = "https://type.fit/api/quotes";

const fetchRandomQuoteFromAPI = async () => {
	try {
		// fetch(URL).then((response) =>
		// 	response.json().then((responseData) => console.log(responseData))
		// );

		const response = await fetch(URL);

		if (!response.ok) {
			throw new Error("Response is not okay!");
		}

		const quotesData = await response.json();
		return quotesData;
	} catch (error) {
		console.log(error.message, error.status);
	}
};

const searchOnRandomIdx = (data, cb) => {
	const randomIdx = mathUtil.randomInRange(0, data.length - 1);
	const quote = {
		title: data[randomIdx].text,
		author: data[randomIdx].author.split(",")[0],
	};
	cb(quote);
};

// cb callback
const fetchRandomQuote = (cb) => {
	// OS path for quotes data
	const p = path.join(rootDir, "data", "random-quotes.json");

	fs.readFile(p, (err, fileContent) => {
		if (err) {
			console.log("here");
			const quotePromise = fetchRandomQuoteFromAPI();
			quotePromise.then((data) => {
				fs.writeFile(p, JSON.stringify(data), (err) => {
					if (err) {
						console.log(err);
					} else {
						searchOnRandomIdx(data, cb);
					}
				});
			});
		} else {
			const parsedData = JSON.parse(fileContent);
			searchOnRandomIdx(parsedData, cb);
		}
	});
};

module.exports = fetchRandomQuote;

// tries to read first if file doesn't exist then we create file and save the data in file else we just return the random quote from file.
