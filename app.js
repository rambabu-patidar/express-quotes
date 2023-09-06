const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const quotesRoutes = require("./routes/quotes");
const rootDir = require("./util/path");
const errorControllers = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use(quotesRoutes);
app.use("/admin", adminRoutes);

// "/" Error Route
app.use("/", errorControllers.get404);

app.listen(3000, () => {
	console.log("started listening to port 3000");
});
