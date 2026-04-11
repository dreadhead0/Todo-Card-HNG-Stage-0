# 🚀 HNG Stage 0 – Testable Todo Item Card

## 📌 Overview

This project is a **clean, modern, and accessible Todo Task Card component** built as part of the **HNG Frontend Internship – Stage 0 task**.

The goal of this task is to demonstrate strong fundamentals in:

- Semantic HTML
- Responsive design
- Accessibility (a11y)
- Testability using `data-testid`
- Basic JavaScript interactivity

---

## 🎯 Objective

Build a **testable Todo Card UI component** that:

- Displays task information clearly
- Is accessible to all users
- Works across different screen sizes
- Passes automated tests using exact `data-testid` attributes

---

## ✨ Features

### 🧩 Core UI Elements

- Task Title
- Task Description
- Priority Indicator (High, Medium, Low)
- Due Date
- Dynamic Time Remaining
- Status Indicator (Pending / Done)
- Completion Toggle (Checkbox)
- Tags (Work, Urgent, Design)
- Edit & Delete Buttons

---

### ⏱ Dynamic Time System

- Calculates time remaining relative to a fixed due date
- Displays human-readable output such as:
  - `Due in 2 days 4 hours`
  - `Due tomorrow`
  - `Due in 45 minutes`
  - `Overdue by 1 day 2 hours`

- Automatically updates every 60 seconds using `setInterval`

---

### ✅ Interactive Behaviour

- Checkbox toggles task completion
- Updates UI in real-time:
  - Strikes through task title
  - Changes status from **Pending → Done**
  - Updates status indicator visually

- Edit button logs action to console
- Delete button triggers confirmation + alert

---

### 🎨 UI & Design

- Clean, modern card layout
- Soft shadows and rounded corners
- Responsive across devices (320px → 1200px)
- Tag pills with custom colors and borders
- Smooth hover and transition effects

---

### ♿ Accessibility (A11y)

- Semantic HTML structure (`article`, `header`, `section`, `footer`)
- Proper form labeling (`input + label`)
- `aria-label` used where necessary
- Keyboard navigable (Tab support)
- Visible focus states
- Live updates supported via `aria-live="polite"`

---

### 🧪 Testability

All required elements include exact `data-testid` attributes for automated testing:

| Element        | data-testid                 |
| -------------- | --------------------------- |
| Card Container | `test-todo-card`            |
| Title          | `test-todo-title`           |
| Description    | `test-todo-description`     |
| Priority       | `test-todo-priority`        |
| Due Date       | `test-todo-due-date`        |
| Time Remaining | `test-todo-time-remaining`  |
| Status         | `test-todo-status`          |
| Checkbox       | `test-todo-complete-toggle` |
| Tags List      | `test-todo-tags`            |
| Edit Button    | `test-todo-edit-button`     |
| Delete Button  | `test-todo-delete-button`   |

---

## 🛠 Tech Stack

- **HTML5** – Semantic structure
- **CSS3** – Styling, layout, responsiveness
- **Vanilla JavaScript (ES6)** – Interactivity & logic

---

## 📱 Responsiveness

- Mobile-first design
- Fully responsive from **320px to 1200px**
- No horizontal overflow
- Adaptive layout for smaller screens

---

## 🧠 Key Implementation Details

### 📅 Date Handling

- Uses JavaScript `Date` object with local time:

```js
new Date(2026, 3, 16, 6, 0, 0);
```

> Note: Month is 0-based (April = 3)

---

### ⏳ Time Calculation Logic

- Converts milliseconds into:
  - Days
  - Hours
  - Minutes

- Outputs readable strings with correct pluralization

---

### 🔄 Live Updates

```js
setInterval(updateTimeRemaining, 60000);
```

Ensures time display remains accurate.

---

## 🚀 Live Demo

👉 [View Live Project](#)
_(todo-card-hng-stage-0-production.up.railway.app)_

---

## 📂 Repository

👉 [GitHub Repository](#)
_(https://github.com/Precious-Odion/Todo-Card-HNG-Stage-0)_

---

## 🧪 How to Run Locally

```bash
git clone <https://github.com/Precious-Odion/Todo-Card-HNG-Stage-0>
open index.html
```

---

## 📋 Acceptance Criteria (Met ✅)

- ✔ All required `data-testid` attributes present
- ✔ Accessible and keyboard navigable
- ✔ Responsive layout (320px–1200px)
- ✔ Semantic HTML used correctly
- ✔ Functional checkbox toggle
- ✔ Time remaining updates correctly
- ✔ Edit & Delete buttons implemented
- ✔ No layout overflow or breaking

---

## 💡 Future Improvements

- Add multiple todo cards dynamically
- Implement edit functionality (modal/form)
- Persist data using Local Storage
- Add animations for better UX

---

## 🙌 Acknowledgment

Built as part of the **HNG Internship Program (Frontend Track)**.

---

## 📅 Deadline

**April 16, 2026**

---

## 👤 Author

**Precious Odion**

---

## ⭐ Final Note

This project focuses on **clarity, accessibility, and testability**, ensuring it meets both **user experience standards** and **automated evaluation requirements**.

---
