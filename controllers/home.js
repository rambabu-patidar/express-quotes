exports.getHome = (req, res, next) => {
	res.render("home", {
		path: "/",
		pageTitle: "Home Page",
		pageDescription: "Home page of quote generator app",
	});
};
