import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { Task } from '@/hooks/useTasks';

/**
 * TaskItem Component
 * 
 * Displays a single task with:
 * - Checkbox to mark as complete (with strikethrough effect)
 * - Task text
 * - Delete button
 * 
 * Design Philosophy:
 * - Soft rounded card with subtle shadow
 * - Smooth transitions on hover and interactions
 * - Clear visual feedback for completion state
 * - Accessible keyboard navigation
 */

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div
      className="
        flex items-center gap-3 px-4 py-3
        bg-card text-card-foreground
        border border-border rounded-lg
        transition-all duration-200
        hover:shadow-md hover:border-primary/30
        group
      "
    >
      {/* Checkbox for task completion */}
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => onToggle(task.id)}
        className="mt-0.5"
        aria-label={`Mark "${task.text}" as ${task.completed ? 'incomplete' : 'complete'}`}
      />

      {/* Task text with strikethrough effect when completed */}
      <span
        className={`
          flex-1 text-base transition-all duration-200
          ${task.completed
            ? 'line-through text-muted-foreground'
            : 'text-card-foreground'
          }
        `}
      >
        {task.text}
      </span>

      {/* Delete button - appears on hover */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onDelete(task.id)}
        className="
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200
          text-destructive hover:bg-destructive/10
          hover:text-destructive
        "
        aria-label={`Delete "${task.text}"`}
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
}
