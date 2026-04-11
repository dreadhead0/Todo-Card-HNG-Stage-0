    const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
    const title = document.querySelector('[data-testid="test-todo-title"]');
    const statusText = document.querySelector('[data-testid="test-todo-status"]');
    const timeRemaining = document.querySelector('[data-testid="test-todo-time-remaining"]');
    const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
    const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');

    // for null safety to prevent silent failures
    if (!checkbox || !title || !statusText || !timeRemaining || !editBtn || !deleteBtn) {
    console.error("Missing DOM elements");
    }

    // function to update time remaining
    function updateTimeRemaining() {
    // new Date(Year, month, day, Hour, Minute, Second);
    const dueDate = new Date(2026, 3, 11, 18, 47, 0);
    // April = 3 because of Javascript 0-based indexing
    const now = new Date();

    const diffMs = dueDate - now;

    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    let message = "";

    // Handles overdue case
    if (diffMs <= 0) {
        const overdueMinutes = Math.abs(diffMinutes);
        const overdueHours = Math.floor(overdueMinutes / 60);
        const overdueDays = Math.floor(overdueHours / 24);

        const remHours = overdueHours % 24;
        const remMinutes = overdueMinutes % 60;

        if (overdueDays > 0) {
            message = `Overdue by ${overdueDays} days ${remHours} hours`;
        } 
        else if (overdueHours > 0) {
            message = `Overdue by ${overdueHours} hours ${remMinutes} minutes`;
        } 
        else {
            message = `Overdue by ${overdueMinutes} minutes`;
        }
    }

    // less than one hour remaining
    else if (diffMinutes < 60) {
        const m = diffMinutes;
        message = `Due in ${m} minute${m === 1 ? "" : "s"}`;
    }

    // less than 24 hours
    else if (diffHours < 24) {
        const h = diffHours;
        const m = diffMinutes % 60;

        message = `Due in ${h} hour${h === 1 ? "" : "s"} ${m} minute${m === 1 ? "" : "s"}`;
    }

    // multi-days
    else if (diffDays === 1) {
        message = "Due tomorrow";
    } 
    else {
        const remHours = diffHours % 24;
        message = `Due in ${diffDays} days ${remHours} hours`;
    }

    timeRemaining.textContent = message;
}

    // call the function
    updateTimeRemaining();

    // time interval
    setInterval(updateTimeRemaining, 1000);

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