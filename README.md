# Minimalist To-Do List Application

A clean, professional, and beginner-friendly To-Do List web application built with React and Tailwind CSS. This application demonstrates modern React patterns including functional components, hooks, and localStorage persistence—all without requiring a backend server.

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
| **shadcn/ui** | Pre-built accessible components |
| **localStorage API** | Browser-based persistent data storage |

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ ([Download](https://nodejs.org/))
- pnpm (comes with Node.js or install via `npm install -g pnpm`)

### Installation

```bash
# Navigate to project directory
cd todo-list-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open your browser to `http://localhost:3000/` and start managing your tasks!

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── TaskItem.tsx      # Individual task component
│   │   ├── TaskInput.tsx     # New task input field
│   │   └── ui/               # shadcn/ui components
│   ├── hooks/
│   │   └── useTasks.ts       # Task management logic
│   ├── pages/
│   │   └── Home.tsx          # Main application page
│   ├── contexts/
│   │   └── ThemeContext.tsx  # Theme switching
│   ├── App.tsx               # Root component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
└── index.html                # HTML template
```

## 🎨 Design Philosophy

The application follows a **Minimalist Productivity** design approach:

- **Clarity:** Every visual element serves a purpose
- **Soft Aesthetics:** Rounded corners and gentle colors create a welcoming interface
- **Whitespace:** Ample breathing room reduces cognitive load
- **Smooth Interactions:** Transitions and hover effects provide visual feedback
- **Accessibility:** High contrast, focus indicators, and keyboard support

### Color Palette

**Light Mode:** Clean whites with soft blue accents
**Dark Mode:** Deep charcoal backgrounds with light text

## 📖 Documentation

For detailed setup instructions, code explanations, and customization guides, see [SETUP_GUIDE.md](./SETUP_GUIDE.md).

### Key Concepts Explained

**useState Hook:** Allows functional components to manage state and trigger re-renders when data changes.

**localStorage:** Browser API for persistent client-side data storage. Tasks are automatically saved and restored across sessions.

## 🔧 Available Commands

```bash
# Start development server with hot reload
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type check
pnpm check

# Format code
pnpm format
```

## 🧩 Component Overview

### TaskInput
Provides an input field and button for adding new tasks. Supports Enter key submission and validates non-empty input.

### TaskItem
Displays individual tasks with checkbox for completion, strikethrough effect, and delete button. Delete button appears on hover for a clean interface.

### useTasks Hook
Centralized hook managing all task operations and localStorage persistence. Provides functions for adding, toggling, and deleting tasks, plus statistics.

### Home Page
Main application interface combining all components. Displays task list, statistics, and theme toggle button.

## 💾 Data Persistence

Tasks are automatically saved to browser localStorage under the key `todolist-tasks`. The data persists across browser sessions and is restored when you revisit the application.

**Important:** localStorage data is:
- Stored per browser/device (not synced across devices)
- Limited to ~5-10MB per domain
- Not encrypted (don't store sensitive information)

## 📱 Responsive Design

The application is fully responsive and tested on:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktop screens (1024px and up)

## ♿ Accessibility

- Full keyboard navigation support
- ARIA labels for screen readers
- High contrast ratios for readability
- Clear focus indicators
- Semantic HTML structure

## 🎓 Learning Outcomes

By studying this codebase, you'll learn:

1. **React Fundamentals:** Functional components, hooks (useState, useEffect), and component composition
2. **State Management:** Using useState for local state and custom hooks for complex logic
3. **Browser APIs:** localStorage for persistent data storage
4. **Modern CSS:** Tailwind CSS utility-first approach
5. **TypeScript:** Type safety in JavaScript applications
6. **Accessibility:** Building inclusive web applications
7. **Component Design:** Creating reusable, maintainable components

## 🚀 Deployment

### Manus Hosting (Recommended)
Click the "Publish" button in the Manus UI to deploy instantly with custom domain support.

### Other Platforms
```bash
pnpm build
# Deploy the dist/ folder to Vercel, Netlify, GitHub Pages, etc.
```

## 🐛 Troubleshooting

**Tasks not saving?**
- Check browser console for errors (F12 → Console)
- Ensure localStorage is enabled in browser settings
- Clear browser cache and reload

**Styling issues?**
- Run `pnpm install` to ensure dependencies are installed
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

**Application won't start?**
- Delete `node_modules` and `pnpm-lock.yaml`
- Run `pnpm install` again
- Start with `pnpm dev`

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 📄 License

This project is provided for educational and personal use.

---

**Built with ❤️ for beginners and productivity enthusiasts.**

Start organizing your tasks today! 🎉
