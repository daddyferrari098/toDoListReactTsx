import React from 'react';
import { TaskItem } from './TaskItem';

export function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 py-8">
        Aucune tâche pour le moment. Ajoutez-en une !
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          {...task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}