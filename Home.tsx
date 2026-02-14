import { useTheme } from '@/contexts/ThemeContext';
import { useTasks } from '@/hooks/useTasks';
import { TaskInput } from '@/components/TaskInput';
import { TaskItem } from '@/components/TaskItem';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Trash2 } from 'lucide-react';

/**
 * Home Page - Main To-Do List Application
 * 
 * This is the primary interface for the To-Do List application.
 * 
 * Features:
 * - Add new tasks via TaskInput component
 * - Display all tasks with TaskItem components
 * - Toggle task completion status
 * - Delete individual tasks
 * - Clear all completed tasks
 * - Light/Dark mode toggle
 * - Task statistics (total, completed, pending)
 * - Empty state message when no tasks exist
 * 
 * Design Philosophy (Minimalist Productivity):
 * - Centered card layout with ample whitespace
 * - Soft blue accent color for interactive elements
 * - Smooth transitions and hover effects
 * - Clear visual hierarchy with typography
 * - Responsive design for mobile and desktop
 * 
 * localStorage Integration:
 * - All tasks are automatically persisted to browser localStorage
 * - Tasks are restored on page reload
 * - No backend required - fully client-side
 */

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { tasks, addTask, toggleTask, deleteTask, clearCompleted, stats, isLoaded } = useTasks();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header with title and controls */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              My Tasks
            </h1>
            <p className="text-muted-foreground">
              {stats.total === 0
                ? 'No tasks yet. Add one to get started!'
                : `${stats.pending} of ${stats.total} tasks remaining`}
            </p>
          </div>

          {/* Theme toggle button */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-lg"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Main card container */}
        <div className="bg-card text-card-foreground rounded-xl shadow-lg border border-border p-6 space-y-6">
          {/* Task input section */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Add a new task
            </label>
            <TaskInput onAddTask={addTask} />
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Tasks list section */}
          <div className="space-y-3">
            {tasks.length === 0 ? (
              <div className="py-12 text-center">
                <div className="text-muted-foreground mb-2">
                  <svg
                    className="w-16 h-16 mx-auto opacity-30 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  No tasks yet. Create one to get started!
                </p>
              </div>
            ) : (
              <>
                {/* Render all tasks */}
                {tasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                  />
                ))}
              </>
            )}
          </div>

          {/* Footer with statistics and clear button */}
          {tasks.length > 0 && (
            <>
              <div className="h-px bg-border" />
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{stats.completed}</span> completed of{' '}
                  <span className="font-semibold text-foreground">{stats.total}</span>
                </div>

                {/* Clear completed button */}
                {stats.completed > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearCompleted}
                    className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                    aria-label="Clear all completed tasks"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear completed
                  </Button>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer information */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Tasks are saved automatically to your browser's local storage.
            <br />
            No account or backend required.
          </p>
        </div>
      </div>
    </div>
  );
}
