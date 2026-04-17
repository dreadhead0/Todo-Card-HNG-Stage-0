🚀 Advanced Todo Card (Stage 1a – HNG Frontend Track)

📌 Overview

This project is an interactive, stateful Todo Card component built as part of the HNG Stage 1a frontend task. It extends a basic static Todo Card (Stage 0) into a more dynamic UI with editing capabilities, status management, priority visualization, time tracking, and accessibility improvements.

The goal was to simulate a real-world UI component with proper state handling, responsive design, and accessibility best practices — without turning it into a full application.

⸻

✨ What Changed from Stage 0

Stage 0 focused on a static Todo Card layout. In Stage 1a, the following major enhancements were introduced:

1. 📝 Editable Todo Content
   • Added full edit mode UI
   • Users can edit:
   • Title
   • Description
   • Priority
   • Status
   • Due date
   • Changes reflect immediately on save
   • Cancel restores previous state

⸻

2. 🔄 Status Management System
   • Introduced controlled status system:
   • Pending
   • In Progress
   • Done
   • Status is now synchronized across:
   • Checkbox
   • Status display badge
   • Status dropdown control

⸻

3. 🎯 Expand / Collapse Description
   • Long descriptions are automatically truncated
   • “Show more / Show less” toggle implemented
   • Collapsible section improves readability
   • Accessibility added using aria-expanded and aria-controls

⸻

4. ⏱️ Smart Time Tracking
   • Live countdown to due date:
   • “Due in X minutes/hours/days”
   • “Overdue by X time”
   • Updates every minute
   • Automatically stops when task is marked “Done”
   • Shows “Completed” state when finished

⸻

5. 🎨 Priority Visualization Upgrade
   • Priority now has both:
   • Text badge
   • Colored indicator dot
   • Visual states:
   • Low → Green
   • Medium → Yellow
   • High → Red

⸻

6. ♿ Accessibility Improvements
   • Added proper labels for all form fields
   • Keyboard navigation support improved
   • Expand toggle includes:
   • aria-expanded
   • aria-controls
   • Time updates use aria-live="polite"

⸻

🧠 New Design Decisions

1. Single Card Architecture

The app was intentionally kept as a single reusable component, not a full todo system, to match the task scope and improve focus on UI behavior.

⸻

2. Edit Mode as Full State Switch

Instead of inline editing, the design uses a full view/edit toggle system:
• View mode = clean card UI
• Edit mode = form-driven state

This avoids layout confusion and improves usability.

⸻

3. Description Truncation Logic

Descriptions longer than 120 characters are automatically truncated with:
• "..." indicator in collapsed mode
• Full reveal on expansion

This keeps UI compact and readable.

⸻

4. Manual State Synchronization

Instead of frameworks, all state is handled manually using:
• DOM queries
• Central update functions
• Explicit UI sync functions

This was intentional to demonstrate raw frontend logic understanding.

⸻

5. Priority Indicator Separation

Priority is split into:
• Text badge (semantic label)
• Colored dot indicator (visual cue)

This improves clarity and aligns with modern UI patterns.

⸻

⚠️ Known Limitations
• No backend persistence (data resets on refresh)
• No animation transitions for edit mode switching
• Focus trap is optional and not fully enforced in all edge cases
• Time updates run at 60s interval (not real-time seconds)
• No multi-task support (single card only by design)

⸻

♿ Accessibility Notes

The project includes several accessibility considerations:

Implemented
• Labels properly associated with form fields (label for)
• Expand/collapse uses:
• aria-expanded
• aria-controls
• Status dropdown has accessible name
• aria-live="polite" used for time updates
• Keyboard navigation supported across interactive elements

Partially Implemented / Optional
• Focus trapping in edit mode (optional enhancement)
• Full ARIA dialog pattern not implemented for edit form

⸻

📱 Responsiveness

The UI is fully responsive across:
• 📱 Mobile (320px)
• 📟 Tablet (768px)
• 💻 Desktop (1024px+)

Responsive behaviors:
• Card adapts to screen width
• Buttons stack on smaller screens
• Tags wrap naturally
• Long text does not break layout
• Form fields stack vertically on mobile

⸻

🛠️ Tech Stack
• HTML5
• CSS3 (Flexbox + Responsive design)
• Vanilla JavaScript (DOM manipulation)
• No frameworks or libraries

⸻

🚀 Live Demo

Add your deployed link here

⸻

📂 Repository

Add your GitHub repo link here

⸻

📌 Summary

This project demonstrates:
• Strong DOM manipulation skills
• Manual state management
• Accessibility awareness
• Responsive UI design
• Real-world component thinking
