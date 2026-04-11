const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const title = document.querySelector('[data-testid="test-todo-title"]');
const statusText = document.querySelector('[data-testid="test-todo-status"]');
const timeRemaining = document.querySelector('[data-testid="test-todo-time-remaining"]');
const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');

// for null safety to prevent silent failures
if (!checkbox || !title || !statusText || !timeRemaining) {
  console.error("Missing DOM elements");
}

// function to update time remaining
function updateTimeRemaining() {
    const dueDate = new Date("2026-04-16T18:00:00");
    const now = new Date();

    const diffMs = dueDate - now;

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours /24);

    let message = "";

    if (diffMs <= 0) {
        message = diffHours < 0 
            ? `Overdue by ${Math.abs(diffHours)} hours`
            : "Due now!";   
    }
    else if (diffDays === 0) {
            message = "Due today!";
    } 
    else if (diffDays === 1) { 
            message = "Due tomorrow";
    }
    else {
        message = `Due in ${diffDays} days`;
    }

    timeRemaining.textContent = message;
}

// call the function
updateTimeRemaining();

// time interval
setInterval(updateTimeRemaining, 60000);

checkbox.addEventListener("change", () => {
    title.classList.toggle("done");

    if (checkbox.checked) {
        statusText.textContent = "Done";
        statusText.classList.add("done-status");
    } else {
        statusText.textContent = "Pending";
        statusText.classList.remove("done-status");
    }
});

editBtn.addEventListener("click", () => {
    console.log("edit clicked");
});

deleteBtn.addEventListener("click", () => {
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) {
        alert('Delete clicked');
    }
});