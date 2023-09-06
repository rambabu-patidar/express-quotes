const CustomQuote = require("../models/custom-quote");
const fetchRandomQuote = require("../models/random-quote");

exports.getAddCustomQuote = (req, res, next) => {
	res.render("add-custom-quote", {
		path: "/admin/add-custom-quote",
		pageTitle: "Add your quote",
		pageDescription: "Custom code page.",
	});
};

exports.getCustomQuote = (req, res, next) => {
	CustomQuote.fetchAll((customQuotes) => {
		res.render("custom-quote", {
			path: "/admin/custom-quote",
			pageTitle: "Your custom quote",
			pageDescription: "Your custom quote.",
			quotes: customQuotes,
		});
	});
};

exports.postCustomQuote = (req, res, next) => {
	const enteredQuote = { title: req.body.title, author: req.body.author };
	const customQuote = new CustomQuote(enteredQuote);
	customQuote.save();
	res.redirect("/admin/custom-quote");
};

exports.getRandomQuote = (req, res, next) => {
	fetchRandomQuote((quote) => {
		res.render("random-quote", {
			path: "/random-quote",
			pageTitle: "Random Quote",
			pageDescription: "Random quote generated for you.",
			quote: quote.title,
			author: quote.author,
		});
	});
};
