const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

router.get("/", taskController.getTasks);

router.get("/create", taskController.showCreateForm);
router.post("/create", taskController.createTask);

router.get("/edit/:id", taskController.showEditForm);
router.post("/edit/:id", taskController.editTask);

router.post("/delete/:id", taskController.deleteTask);

router.get("/:id", taskController.getTaskDetails);

module.exports = router;