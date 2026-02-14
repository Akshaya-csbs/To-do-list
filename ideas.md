# To-Do List App - Design Brainstorm

## Design Direction Selected: **Minimalist Productivity**

After analyzing the Todoist landing page and the requirements for a beginner-friendly To-Do List application, I have chosen the **Minimalist Productivity** design philosophy. This approach emphasizes clarity, focus, and elegant simplicity—perfect for a task management tool.

---

## Design Philosophy

### Core Principles
1. **Clarity Over Decoration**: Every visual element serves a purpose. Unnecessary ornamentation is removed to maintain focus on task management.
2. **Soft, Approachable Aesthetics**: Rounded corners, subtle shadows, and gentle color transitions create a welcoming, non-threatening interface.
3. **Progressive Disclosure**: Information is revealed gradually—simple at first glance, powerful when explored.
4. **Intentional Whitespace**: Ample breathing room between elements reduces cognitive load and improves readability.

### Color Philosophy
- **Primary Palette**: Soft blue (#3B82F6) as the accent color, paired with warm whites and light grays
- **Reasoning**: Blue conveys trust and productivity; soft tones feel approachable rather than corporate
- **Light Mode**: Clean white backgrounds (#FFFFFF) with dark text (#1F2937) for maximum readability
- **Dark Mode**: Deep charcoal backgrounds (#0F172A) with light text (#F3F4F6) for eye comfort

### Layout Paradigm
- **Centered Card Layout**: Tasks are displayed in a single, focused card container
- **Vertical Flow**: Tasks stack vertically, creating a natural reading pattern
- **Asymmetric Header**: Header includes title, task count, and theme toggle—not perfectly centered
- **Breathing Space**: Generous padding and margins prevent the interface from feeling cramped

### Signature Elements
1. **Soft Rounded Cards**: Task items use `rounded-lg` with subtle shadows for depth
2. **Gradient Accents**: Subtle linear gradients on buttons and hover states add visual interest
3. **Smooth Transitions**: All interactions include 200-300ms transitions for fluidity

### Interaction Philosophy
- **Immediate Feedback**: Hover states, focus rings, and animations provide instant visual confirmation
- **Delightful Micro-interactions**: Smooth transitions when adding/deleting tasks, not abrupt changes
- **Accessible by Default**: High contrast ratios, clear focus indicators, and keyboard navigation

### Animation Guidelines
- **Task Addition**: Fade-in + slight slide-up (200ms ease-out)
- **Task Deletion**: Fade-out + slide-left (150ms ease-in)
- **Hover Effects**: Subtle lift effect on cards (box-shadow expansion, 100ms ease)
- **Button Interactions**: Color transition on hover/focus (150ms ease)

### Typography System
- **Display Font**: Geist Sans (modern, clean, geometric) for headings
- **Body Font**: Inter (highly readable, neutral) for task content and UI text
- **Hierarchy**:
  - H1: 32px, bold (page title)
  - H2: 20px, semibold (section headers)
  - Body: 16px, regular (task items)
  - Small: 14px, regular (metadata, timestamps)

---

## Implementation Notes
- Use Tailwind CSS 4 with OKLCH color format for theme variables
- Implement `next-themes` for seamless light/dark mode switching
- Leverage shadcn/ui Button and Card components for consistency
- Store tasks in localStorage with JSON serialization
- Ensure responsive design: mobile-first approach with breakpoints at 640px, 1024px
