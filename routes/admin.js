const express = require("express");

const quotesController = require("../controllers/quotes");

const router = express.Router();

// "/admin/add-custom-quote" => GET
router.get("/add-custom-quote", quotesController.getAddCustomQuote);

// "/admin/custom-quote" => GET
router.get("/custom-quote", quotesController.getCustomQuote);

// "/admin/custom-quote" => POST
router.post("/custom-quote", quotesController.postCustomQuote);

module.exports = router;
