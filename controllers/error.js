exports.get404 = (req, res, next) => {
	res.render("404", {
		path: "",
		pageTitle: "Page not found!",
		pageDescription: "The page you want to access doesn't exist",
	});
};
