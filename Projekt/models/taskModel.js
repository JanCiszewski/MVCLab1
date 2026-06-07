const tasks = [
    {
        id: 1,
        title: "Logowanie",
        description: "Naprawić błąd logowania",
        assignedUser: "Jan",
        status: "Do zrobienia"
    },
    {
        id: 2,
        title: "Filtrowanie",
        description: "Dodać filtrowanie",
        assignedUser: "Adrian",
        status: "Zrobione"
    },
    {
        id: 3,
        title: "Rejestracja",
        description: "Dodać formularz rejestracji",
        assignedUser: "Jan",
        status: "W trakcie"
    },
    {
        id: 4,
        title: "Baza danych",
        description: "Utworzenie bazy danych do przechowywanie informacji o taskach",
        assignedUser: "Adam",
        status: "Do zrobienia"
    },
    {
        id: 5,
        title: "Poprawa UI",
        description: "Poprawienie kwesti wizualnej całej strony",
        assignedUser: "Maciej",
        status: "Zrobione"
    }
];

const getAllTasks = () => {
    return tasks;
};

const addTask = (task) => {
    tasks.push(task);
};

const getTaskById = (id) => {
    return tasks.find(task => task.id == id);
};

const updateTask = (id, updatedTask) => {
    const index = tasks.findIndex(task => task.id == id);
    tasks[index] = updatedTask;
};

const deleteTask = (id) => {
    const index = tasks.findIndex(task => task.id == id);
    tasks.splice(index, 1);
};

const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
};

module.exports = {
    getAllTasks,
    addTask,
    getTaskById,
    updateTask,
    deleteTask,
    getTasksByStatus
};