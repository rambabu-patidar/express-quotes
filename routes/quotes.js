const express = require("express");

const homeController = require("../controllers/home");
const quotesController = require("../controllers/quotes");
const router = express.Router();

// "/" => GET
router.get("/", homeController.getHome);

// "/random-quote" => GET
router.get("/random-quote", quotesController.getRandomQuote);

module.exports = router;
