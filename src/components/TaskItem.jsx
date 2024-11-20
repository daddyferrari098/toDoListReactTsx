import React from 'react';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';

export function TaskItem({ id, text, completed, onToggle, onDelete }) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg ${
        completed ? 'bg-gray-50' : 'bg-white'
      } border border-gray-200 hover:border-purple-200 transition-colors`}
    >
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={() => onToggle(id)}
          className="text-purple-600 hover:text-purple-700 transition-colors"
        >
          {completed ? (
            <CheckCircle className="h-6 w-6" />
          ) : (
            <Circle className="h-6 w-6" />
          )}
        </button>
        <span
          className={`flex-1 ${
            completed ? 'text-gray-500 line-through' : 'text-gray-800'
          }`}
        >
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-red-500 hover:text-red-600 transition-colors p-2"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}