    document.addEventListener("DOMContentLoaded", () => {

    const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
    const title = document.querySelector('[data-testid="test-todo-title"]');
    const statusText = document.querySelector('[data-testid="test-todo-status"]');
    const timeRemaining = document.querySelector('[data-testid="test-todo-time-remaining"]');
    const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
    const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');

    const editForm = document.querySelector('[data-testid="test-todo-edit-form"]');
    const editTitleInput = document.querySelector('[data-testid="test-todo-edit-title-input"]');
    const editDescInput = document.querySelector('[data-testid="test-todo-edit-description-input"]');
    const editPrioritySelect = document.querySelector('[data-testid="test-todo-edit-priority-select"]');
    const editDateInput = document.querySelector('[data-testid="test-todo-edit-due-date-input"]');

    const saveBtn = document.querySelector('[data-testid="test-todo-save-button"]');
    const cancelBtn = document.querySelector('[data-testid="test-todo-cancel-button"]');

    const card = document.querySelector('[data-testid="test-todo-card"]');
    const priority = document.querySelector('[data-testid="test-todo-priority"]');
    const dueDateEl = document.querySelector('[data-testid="test-todo-due-date"]');

    const priorityIndicator = document.querySelector('[data-testid="test-todo-priority-indicator"]');

    const overdueIndicator = document.querySelector('[data-testid="test-todo-overdue-indicator"]');
    const statusControl = document.querySelector('[data-testid="test-todo-status-control"]');
    
    let isExpanded = false;
    const expandToggle = document.querySelector('[data-testid="test-todo-expand-toggle"]');
    const collapsible = document.querySelector('[data-testid="test-todo-collapsible-section"]');

    function updateExpandVisibility() {
    expandToggle.style.display =
        currentFullDesc.length > 120 ? "inline-block" : "none";
    }

    let currentFullDesc = "";

    const desc = document.querySelector('[data-testid="test-todo-description"]');
    currentFullDesc  = desc.textContent.trim();
    isExpanded = false;

    setTimeout(() => {
        syncExpandState();
    }, 0);

    function getFocusableElements(container) {
    return container.querySelectorAll(
        'input, textarea, select, button, [tabindex]:not([tabindex="-1"])'
    );
}

function trapFocus(e) {
    const focusable = getFocusableElements(editForm);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.key !== "Tab") return;

    if (e.shiftKey) {
        if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
        }
    } else {
        if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
}

    function refreshUI() {
        updateTimeRemaining();
    }

    function updatePriorityUI(priorityValue) {
    priority.classList.remove("priority-low", "priority-medium", "priority-high");
    priorityIndicator.classList.remove("priority-low", "priority-medium", "priority-high");

    const value = priorityValue.toLowerCase();

    if (value === "low") {
        priority.classList.add("priority-low");
        priorityIndicator.classList.add("priority-low");
    } 
    else if (value === "medium") {
        priority.classList.add("priority-medium");
        priorityIndicator.classList.add("priority-medium");
    } 
    else {
        priority.classList.add("priority-high");
        priorityIndicator.classList.add("priority-high");
    }
}

    function syncExpandState() {
    const shortDesc =
        currentFullDesc.length > 120
            ? currentFullDesc.slice(0, 120).trim() + "..."
            : currentFullDesc;

    desc.textContent = isExpanded ? currentFullDesc : shortDesc;

    collapsible.classList.toggle("expanded", isExpanded);
    expandToggle.setAttribute("aria-expanded", isExpanded);
    expandToggle.textContent = isExpanded ? "Show less ▲" : "Show more ▼";

    expandToggle.style.display =
        currentFullDesc.length > 120 ? "inline-block" : "none";
    }

    function toggleExpand() {
    isExpanded = !isExpanded;
    syncExpandState();
    }
    expandToggle.addEventListener("click", toggleExpand);

    function autoResize(el) {
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
    }

    editTitleInput.addEventListener("input", () => autoResize(editTitleInput));
    editDescInput.addEventListener("input", () => autoResize(editDescInput));

    let timer;

    let currentDueDate = new Date(2026, 3, 16, 18, 0, 0);
    // new Date(Year, month, day, Hour, Minute, Second);

    // function to update time remaining
    function updateTimeRemaining() {

    if (!currentDueDate) {
        timeRemaining.textContent = "No due date";
        overdueIndicator.textContent = "";
        return;
    }

    if (statusText.textContent === "Done") {
        timeRemaining.textContent = "Completed";
        overdueIndicator.textContent = ""; 
        timeRemaining.classList.remove("overdue");
        return;
    }

    const now = new Date();
    const diffMs = currentDueDate - now;

    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    let message = "";

    if (diffMs <= 0) {
        const overdueMinutes = Math.abs(diffMinutes);
        const overdueHours = Math.floor(overdueMinutes / 60);
        const overdueDays = Math.floor(overdueHours / 24);

        if (overdueDays > 0) {
            message = `Overdue by ${overdueDays} days`;
        } else if (overdueHours > 0) {
            message = `Overdue by ${overdueHours} hours`;
        } else {
            message = `Overdue by ${overdueMinutes} minutes`;
        }

        timeRemaining.classList.add("overdue");
        overdueIndicator.textContent = "⚠ Overdue";

        card.classList.add("overdue-card");

    } else {
        overdueIndicator.textContent = "";
        timeRemaining.classList.remove("overdue");

        card.classList.remove("overdue-card");

        if (diffMinutes < 60) {
            message = `Due in ${diffMinutes} minute${diffMinutes === 1 ? "" : "s"}`;
        } 
        else if (diffHours < 24) {
            const m = diffMinutes % 60;
            message = `Due in ${diffHours} hour${diffHours === 1 ? "" : "s"} ${m} min`;
        } 
        else if (diffDays === 1) {
            message = "Due tomorrow";
        } 
        else {
            message = `Due in ${diffDays} days`;
        }
    }

    timeRemaining.textContent = message;

    }

    refreshUI();
    updateExpandVisibility();

    // time interval
    timer = setInterval(updateTimeRemaining, 60000);

    function setStatus(newStatus) {
    statusText.textContent = newStatus;
    statusControl.value = newStatus;

    statusText.classList.remove("status-pending", "status-progress", "status-done", "done-status");

    if (newStatus === "Pending") {
        statusText.classList.add("status-pending");
        checkbox.checked = false;
        title.classList.remove("done");

        clearInterval(timer);
        timer = setInterval(updateTimeRemaining, 60000);

        refreshUI();
    }

    else if (newStatus === "In Progress") {
        statusText.classList.add("status-progress");
        checkbox.checked = false;
        title.classList.remove("done");

        clearInterval(timer);
        timer = setInterval(updateTimeRemaining, 60000);

        refreshUI();
    }

    else if (newStatus === "Done") {
        statusText.classList.add("status-done", "done-status");
        checkbox.checked = true;
        title.classList.add("done");

        card.classList.remove("overdue-card");

        clearInterval(timer);

        overdueIndicator.textContent = "";
        timeRemaining.classList.remove("overdue");

        timeRemaining.textContent = "Completed";

    return;
    }
    }

    setStatus(statusText.textContent.trim());

    
    function getPriorityDisplay(priority) {
    if (priority === "Low") return "Low";
    if (priority === "Medium") return "Medium";
    if (priority === "High") return "High";
    return priority;
    }

     deleteBtn.addEventListener("click", () => {
        const confirmDelete = confirm("Are you sure?");
        if (confirmDelete) {
            alert('Delete clicked');
        }
    });

 function updatePriorityUI(priorityValue) {
    priority.classList.remove("priority-low", "priority-medium", "priority-high");

    const value = priorityValue.toLowerCase();

    if (value === "low") {
        priority.classList.add("priority-low");
    } 
    else if (value === "medium") {
        priority.classList.add("priority-medium");
    } 
    else {
        priority.classList.add("priority-high");
    }
}

    const initialPriority = priority.textContent.trim();
    updatePriorityUI(initialPriority);
    
    checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        setStatus("Done");
    } else {
        setStatus("Pending");
    }
    });

    statusControl.addEventListener("change", () => {
    setStatus(statusControl.value);
    });

    function formatLocalDateTime(date) {
    const pad = (n) => n.toString().padStart(2, '0');

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    editBtn.addEventListener("click", () => {
    editForm.style.display = "block";
    card.style.display = "none";

    editTitleInput.value = title.textContent.trim();
    editDescInput.value = currentFullDesc;

    autoResize(editTitleInput);

    statusControl.value = statusText.textContent.trim(); 
    editPrioritySelect.value =
        priority.textContent.includes("Low") ? "Low" :
        priority.textContent.includes("Medium") ? "Medium" :
        "High";

    if (currentDueDate) {
        editDateInput.value = formatLocalDateTime(currentDueDate);
    } else {
        editDateInput.value = "";
    }
    document.addEventListener("keydown", trapFocus);

    editTitleInput.focus();
    });

    cancelBtn.addEventListener("click", () => {
    editForm.style.display = "none";
    card.style.display = "flex";
    updateExpandVisibility();
    document.removeEventListener("keydown", trapFocus);

    editBtn.focus();
    });

    saveBtn.addEventListener("click", () => {
    title.textContent = editTitleInput.value.trim();

    currentFullDesc = editDescInput.value.trim();

    isExpanded = false;

    const selectedPriority = editPrioritySelect.value;
    priority.textContent = getPriorityDisplay(selectedPriority);

    if (editDateInput.value) {
        currentDueDate = new Date(editDateInput.value);
        dueDateEl.textContent = currentDueDate.toLocaleString();
    } else {
        currentDueDate = null;
        dueDateEl.textContent = "No due date";
    }

    const selectedStatus = statusControl.value;
    setStatus(selectedStatus);

    syncExpandState(); 
    updateExpandVisibility();

    document.removeEventListener("keydown", trapFocus);


    editForm.style.display = "none";
    card.style.display = "flex";

    updatePriorityUI(selectedPriority);

    editBtn.focus();
});

});