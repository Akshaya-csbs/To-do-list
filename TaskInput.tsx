import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

/**
 * TaskInput Component
 * 
 * Provides an input field and button to add new tasks
 * 
 * Features:
 * - Rounded input field with soft styling
 * - Clear visual hierarchy with button
 * - Keyboard support (Enter to submit)
 * - Prevents empty task submission
 * - Smooth focus and hover states
 * 
 * Design Philosophy:
 * - Soft blue accent on focus
 * - Rounded corners matching design system
 * - Clear visual feedback on interaction
 */

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onAddTask(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="flex gap-2">
      {/* Input field for new task */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task..."
        className="
          flex-1 px-4 py-3
          bg-card text-card-foreground
          border border-border rounded-lg
          placeholder:text-muted-foreground
          focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
          transition-all duration-200
        "
        aria-label="New task input"
      />

      {/* Submit button */}
      <Button
        onClick={handleSubmit}
        disabled={!input.trim()}
        className="
          bg-primary text-primary-foreground
          hover:bg-primary/90
          transition-all duration-200
          rounded-lg px-4 py-3
        "
        aria-label="Add task"
      >
        <Plus className="w-5 h-5" />
      </Button>
    </div>
  );
}
