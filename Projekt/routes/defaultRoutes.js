const express = require("express");
const router = express.Router();

const defaultController = require("../controllers/defaultController");

router.get("/", defaultController.getHome);

module.exports = router;