# Minimalist To-Do List Application

A clean, professional, and beginner-friendly To-Do List web application built with React and Tailwind CSS. 

## ✨ Features

- **Add Tasks:** Create new tasks with a simple input field
- **Complete Tasks:** Mark tasks as done with a checkbox (strikethrough effect)
- **Delete Tasks:** Remove individual tasks with a single click
- **Clear Completed:** Bulk delete all completed tasks at once
- **Task Statistics:** View your progress (X of Y tasks remaining)
- **Light/Dark Mode:** Toggle between light and dark themes
- **Persistent Storage:** All tasks are saved to browser localStorage
- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop
- **Accessibility:** Full keyboard navigation and screen reader support
- **No Backend Required:** Fully client-side application

## 🎯 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework with functional components and hooks |
| **TypeScript** | Type-safe JavaScript for better code quality |
| **Tailwind CSS 4** | Utility-first CSS framework for styling |
| **Vite** | Lightning-fast build tool and dev server |



## 🎨 Design Philosophy

The application follows a **Minimalist Productivity** design approach:

- **Clarity:** Every visual element serves a purpose
- **Soft Aesthetics:** Rounded corners and gentle colors create a welcoming interface
- **Smooth Interactions:** Transitions and hover effects provide visual feedback
- **Accessibility:** High contrast, focus indicators, and keyboard support

### Color Palette

**Light Mode:** Clean whites with soft blue accents
**Dark Mode:** Deep charcoal backgrounds with light text



## 🧩 Component Overview

### TaskInput
Provides an input field and button for adding new tasks. Supports Enter key submission and validates non-empty input.

### TaskItem
Displays individual tasks with checkbox for completion, strikethrough effect, and delete button. Delete button appears on hover for a clean interface.

### useTasks Hook
Centralized hook managing all task operations and localStorage persistence. Provides functions for adding, toggling, and deleting tasks, plus statistics.

### Home Page
Main application interface combining all components. Displays task list, statistics, and theme toggle button.


