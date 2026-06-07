const taskModel = require("../models/taskModel");

const getTasks = (req, res) => {
    const selectedStatus = req.query.status;
    let tasks;
    if (req.query.status) {
        tasks = taskModel.getTasksByStatus(req.query.status);
    } else {
        tasks = taskModel.getAllTasks();
    }
    res.render("tasks", {tasks, selectedStatus});
};

const showCreateForm = (req, res) => {
    res.render("createTask");
};

const createTask = (req, res) => {
    const newTask = {
        id: Date.now(),
        title: req.body.title,
        description: req.body.description,
        assignedUser: req.body.assignedUser,
        status: "Do zrobienia"
    };

    taskModel.addTask(newTask);
    res.redirect("/tasks");
};

const getTaskDetails = (req, res) => {
    const task = taskModel.getTaskById(req.params.id);
    res.render("taskDetails", { task });
};

const showEditForm = (req, res) => {
    const task = taskModel.getTaskById(req.params.id);
    res.render("editTask", { task });
};

const editTask = (req, res) => {
    const updatedTask = {
        id: Number(req.params.id),
        title: req.body.title,
        description: req.body.description,
        assignedUser: req.body.assignedUser,
        status: req.body.status
    };
    taskModel.updateTask(req.params.id, updatedTask);
    res.redirect(`/tasks/${req.params.id}`);
};

const deleteTask = (req, res) => {
    taskModel.deleteTask(req.params.id);
    res.redirect("/tasks");
};

module.exports = {
    getTasks,
    showCreateForm,
    createTask,
    getTaskDetails,
    showEditForm,
    editTask,
    deleteTask
};
