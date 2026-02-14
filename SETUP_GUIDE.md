# Minimalist To-Do List Application - Complete Setup & Documentation

Welcome to the **Minimalist To-Do List** application! This guide provides step-by-step instructions for setting up, running, and understanding the codebase. The application is built with React and requires no backend—all data is stored locally in your browser using localStorage.

---

## 🚀 Quick Start Guide

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **pnpm** (package manager) - Comes with Node.js or install via `npm install -g pnpm`
- **Git** (optional, for version control)

### Installation Steps

**Step 1: Navigate to the project directory**

```bash
cd todo-list-app
```

**Step 2: Install dependencies**

```bash
pnpm install
```

This command reads the `package.json` file and installs all required packages into the `node_modules` directory. The process may take 2-3 minutes depending on your internet speed.

**Step 3: Start the development server**

```bash
pnpm dev
```

You should see output similar to:

```
➜  Local:   http://localhost:3000/
➜  Network: http://169.254.0.21:3000/
```

**Step 4: Open in your browser**

Navigate to `http://localhost:3000/` in your web browser. You should see the To-Do List application with a clean, minimalist interface.

### Building for Production

To create an optimized production build:

```bash
pnpm build
```

This generates a `dist/` folder containing the compiled application ready for deployment.

---

## 📁 Project Structure

The project follows a modular architecture that promotes code reusability and maintainability:

```
todo-list-app/
├── client/
│   ├── public/              # Static assets (images, icons, etc.)
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── TaskItem.tsx       # Individual task display component
│   │   │   ├── TaskInput.tsx      # Input field for new tasks
│   │   │   └── ui/                # shadcn/ui components
│   │   ├── hooks/           # Custom React hooks
│   │   │   └── useTasks.ts        # Task management logic
│   │   ├── pages/           # Page-level components
│   │   │   └── Home.tsx           # Main application page
│   │   ├── contexts/        # React context providers
│   │   │   └── ThemeContext.tsx   # Theme switching logic
│   │   ├── App.tsx          # Root component with routing
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles and design tokens
│   └── index.html           # HTML template
├── package.json             # Project dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.ts           # Vite build configuration
```

---

## 🧠 Understanding Key Concepts

### useState Hook Explained

The `useState` hook is a fundamental React feature that allows functional components to manage state (data that can change over time). Here's how it works:

**Basic Syntax:**

```typescript
const [state, setState] = useState(initialValue);
```

**Breaking it down:**

- `state` is the current value of the state variable
- `setState` is a function to update that state
- `initialValue` is what the state starts as when the component first renders

**Example from TaskInput.tsx:**

```typescript
const [input, setInput] = useState('');
```

This creates a state variable `input` that starts as an empty string. When the user types in the input field, we call `setInput(e.target.value)` to update the state. React then automatically re-renders the component with the new value.

**Why is this important?**

Without state, React components would be static. State allows components to respond to user interactions, update the UI dynamically, and manage data throughout the application lifecycle.

### localStorage Explained

**localStorage** is a browser API that allows you to store data persistently on the user's computer. Unlike regular variables that disappear when the page reloads, localStorage data persists until explicitly deleted.

**How it works:**

```typescript
// Save data
localStorage.setItem('key', JSON.stringify(data));

// Retrieve data
const data = JSON.parse(localStorage.getItem('key'));

// Delete data
localStorage.removeItem('key');
```

**In our application:**

The `useTasks` hook implements localStorage persistence:

1. When the component mounts, it loads tasks from localStorage using `useEffect`
2. Whenever tasks change, it automatically saves them back to localStorage
3. If the user closes and reopens the browser, their tasks are still there

**Key advantages:**

- No backend server required
- Instant data persistence
- Works offline
- Simple and beginner-friendly

**Important limitations:**

- Data is stored per browser/device (not synced across devices)
- Limited storage (typically 5-10MB per domain)
- Data is not encrypted (don't store sensitive information)

---

## 🎨 Design Philosophy: Minimalist Productivity

The application follows a **Minimalist Productivity** design philosophy that emphasizes clarity, focus, and elegant simplicity:

### Core Design Principles

**Clarity Over Decoration:** Every visual element serves a purpose. Unnecessary ornamentation is removed to maintain focus on task management. The interface avoids gradients, excessive shadows, and decorative elements that don't contribute to functionality.

**Soft, Approachable Aesthetics:** Rounded corners, subtle shadows, and gentle color transitions create a welcoming, non-threatening interface. This makes the application feel friendly and accessible to users of all technical levels.

**Progressive Disclosure:** Information is revealed gradually—the interface is simple at first glance, but powerful when explored. For example, the delete button only appears on hover, keeping the interface clean while remaining accessible.

**Intentional Whitespace:** Ample breathing room between elements reduces cognitive load and improves readability. The centered card layout with generous padding prevents the interface from feeling cramped or overwhelming.

### Color Palette

| Element | Light Mode | Dark Mode | Purpose |
|---------|-----------|-----------|---------|
| Primary (Accent) | Soft Blue (#3B82F6) | Soft Blue (#3B82F6) | Buttons, focus states, interactive elements |
| Background | White (#FFFFFF) | Deep Charcoal (#0F172A) | Page background |
| Card | Off-White (#F9FAFB) | Dark Slate (#1E293B) | Task containers |
| Text | Dark Gray (#1F2937) | Light Gray (#F3F4F6) | Body text |
| Muted | Light Gray (#9CA3AF) | Medium Gray (#6B7280) | Secondary text, metadata |

### Typography System

The application uses a carefully selected typography system:

- **Display Font:** Geist Sans (modern, clean, geometric) for headings
- **Body Font:** Inter (highly readable, neutral) for task content and UI text

**Hierarchy:**

- **H1 (Page Title):** 32px, bold - "My Tasks"
- **H2 (Section Headers):** 20px, semibold - Used for major sections
- **Body Text:** 16px, regular - Task items and descriptions
- **Small Text:** 14px, regular - Metadata, timestamps, helper text

### Interactive Elements

**Hover Effects:** Cards lift slightly with expanded shadows when hovered, providing visual feedback that elements are interactive.

**Transitions:** All state changes (adding tasks, deleting, completing) use smooth 200-300ms transitions, creating a polished, responsive feel.

**Focus States:** Keyboard users see clear focus rings on interactive elements, ensuring accessibility for all users.

**Animations:**

- **Task Addition:** Fade-in + slight slide-up (200ms ease-out)
- **Task Deletion:** Fade-out + slide-left (150ms ease-in)
- **Button Hover:** Color transition (150ms ease)

---

## 🔧 Component Architecture

### TaskInput Component

**Purpose:** Provides an input field and button for adding new tasks.

**Key Features:**

- Accepts text input from users
- Validates that input is not empty before submission
- Supports Enter key for quick submission
- Disabled state when input is empty
- Clear visual feedback on focus

**Usage:**

```typescript
<TaskInput onAddTask={addTask} />
```

### TaskItem Component

**Purpose:** Displays a single task with completion checkbox and delete button.

**Key Features:**

- Checkbox for marking tasks as complete
- Strikethrough text effect when completed
- Delete button that appears on hover
- Smooth transitions and hover effects
- Accessible ARIA labels

**Usage:**

```typescript
<TaskItem
  task={task}
  onToggle={toggleTask}
  onDelete={deleteTask}
/>
```

### useTasks Hook

**Purpose:** Centralized logic for managing tasks and localStorage persistence.

**Key Functions:**

| Function | Purpose |
|----------|---------|
| `addTask(text)` | Creates a new task with unique ID |
| `toggleTask(id)` | Marks a task as complete/incomplete |
| `deleteTask(id)` | Removes a task from the list |
| `clearCompleted()` | Removes all completed tasks |

**Return Values:**

```typescript
{
  tasks: Task[],           // Array of all tasks
  addTask: Function,       // Add new task
  toggleTask: Function,    // Toggle completion
  deleteTask: Function,    // Delete task
  clearCompleted: Function,// Clear completed tasks
  stats: {
    total: number,         // Total tasks
    completed: number,     // Completed tasks
    pending: number        // Pending tasks
  },
  isLoaded: boolean        // Whether data is loaded from localStorage
}
```

---

## 📝 Features Explained

### Add a New Task

Type your task description in the input field and press Enter or click the "+" button. The task is immediately added to the list and saved to localStorage.

### Mark Task as Complete

Click the checkbox next to any task to mark it as complete. The task text will display with a strikethrough effect and lighter color, indicating completion.

### Delete a Task

Hover over a task and click the trash icon that appears on the right side. The task is immediately removed from the list and localStorage is updated.

### Clear Completed Tasks

If you have completed tasks, a "Clear completed" button appears at the bottom of the task list. Click it to remove all completed tasks at once.

### View Task Statistics

The header displays your progress: "X of Y tasks remaining" shows how many tasks you still need to complete out of your total tasks.

### Switch Between Light and Dark Mode

Click the sun/moon icon in the top-right corner to toggle between light and dark themes. Your preference is saved in localStorage and persists across sessions.

---

## 🛠️ Customization Guide

### Changing the Primary Color

To change the primary accent color (currently soft blue), edit the color values in `client/src/index.css`:

```css
:root {
  --primary: oklch(0.54 0.24 259.815); /* Change this value */
}
```

The color uses OKLCH format. You can use online OKLCH color pickers to find your desired color.

### Adding New Features

**Example: Add due dates to tasks**

1. Update the `Task` interface in `useTasks.ts` to include a `dueDate` field
2. Modify `TaskInput` to accept date input
3. Update `TaskItem` to display the due date
4. localStorage automatically persists the new data

**Example: Add task categories**

1. Add a `category` field to the `Task` interface
2. Create a filter UI to show tasks by category
3. Update the display logic in `Home.tsx`

### Styling Customization

All styling uses Tailwind CSS utility classes. To customize:

1. Modify `tailwind.config.js` for global configuration
2. Edit `client/src/index.css` for design tokens
3. Update component className attributes for specific styling

---

## 🐛 Troubleshooting

### Tasks not saving to localStorage

**Problem:** Tasks disappear after page reload.

**Solution:** Check browser console (F12 → Console tab) for errors. Ensure localStorage is enabled in your browser settings. Clear browser cache and reload.

### Styling looks broken

**Problem:** Colors or fonts don't appear correctly.

**Solution:** Run `pnpm install` to ensure all dependencies are installed. Clear browser cache (Ctrl+Shift+Delete). Restart the dev server with `pnpm dev`.

### Application won't start

**Problem:** `pnpm dev` shows errors.

**Solution:** 
1. Delete `node_modules` folder: `rm -rf node_modules`
2. Delete lock file: `rm pnpm-lock.yaml`
3. Reinstall: `pnpm install`
4. Start again: `pnpm dev`

---

## 📚 Learning Resources

To deepen your understanding of the technologies used:

- **React Documentation:** [react.dev](https://react.dev) - Official React guide with interactive examples
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com) - Utility-first CSS framework
- **TypeScript:** [typescriptlang.org](https://www.typescriptlang.org) - Type-safe JavaScript
- **localStorage API:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 🎓 Code Quality Best Practices

The codebase follows several best practices for maintainability:

**Clear Comments:** Each component and function includes comments explaining its purpose and key features.

**Meaningful Names:** Variables, functions, and components use descriptive names that clearly indicate their purpose.

**Separation of Concerns:** Logic is separated into hooks, components, and utilities, making code easier to test and modify.

**Accessibility:** ARIA labels and semantic HTML ensure the application is usable by everyone, including those using assistive technologies.

**Responsive Design:** The layout adapts seamlessly from mobile phones to desktop screens using Tailwind's responsive utilities.

---

## 🚀 Deployment

To deploy your To-Do List application:

**Option 1: Manus Hosting (Recommended)**

The project is already set up for Manus hosting. Click the "Publish" button in the Manus UI to deploy instantly.

**Option 2: Other Platforms**

Build the project (`pnpm build`) and deploy the `dist/` folder to any static hosting service like Vercel, Netlify, or GitHub Pages.

---

## 📄 License

This project is provided as-is for educational and personal use.

---

## 🤝 Contributing

To improve this application:

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly in both light and dark modes
4. Ensure responsive design on mobile and desktop
5. Write clear commit messages

---

**Happy task managing! 🎉**

For questions or issues, refer to the code comments or consult the learning resources section above.
