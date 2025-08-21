let tasks = [
  { id: 1, name: "Finish project", category: "Work", completed: false },
  { id: 2, name: "Finish Assignment", category: "Personal", completed: true },
  { id: 3, name: "Finish Quiz", category: "Other", completed: false }
];

const taskList = document.getElementById("taskList");
const taskNameInput = document.getElementById("taskName");
const taskCategorySelect = document.getElementById("taskCategory");
const addTaskBtn = document.getElementById("addTaskBtn");
const filterCategory = document.getElementById("filterCategory");

function renderTasks() {
  const selectedCategory = filterCategory.value;
  taskList.innerHTML = "";

  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  filteredTasks.forEach(task => {
    const li = document.createElement("li");

    // Add text and status
    li.textContent = `${task.name} [${task.category}]`;
    li.className = task.completed ? "completed" : "";

    // Toggle completion on click
    li.addEventListener("click", () => toggleTaskCompletion(task.id));

    taskList.appendChild(li);
  });
}

function addTask() {
  const name = taskNameInput.value.trim();
  const category = taskCategorySelect.value;

  if (name === "") {
    alert("Task name cannot be empty.");
    return;
  }

  const newTask = {
    id: Date.now(),
    name,
    category,
    completed: false
  };

  tasks.push(newTask);
  renderTasks();

  taskNameInput.value = "";
}


function toggleTaskCompletion(id) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);
filterCategory.addEventListener("change", renderTasks);

// Initial render
renderTasks();
