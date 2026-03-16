import React from 'react'

export default function TaskList({tasks, onDelete}) {
  return (
    <div>
      <h3>Task</h3>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              <span>{t.text}</span>
              <button onClick={() => onDelete(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
