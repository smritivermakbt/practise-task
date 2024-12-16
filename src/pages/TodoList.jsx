// src/components/TodoList.js
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, updateTodo,  } from '../store/todoSlice.js';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const [editText, setEditText] = useState('');

  const handleToggle = (id) => {
    dispatch(toggleTodo({ id }));
  };

  const handleDelete = (id) => {
    dispatch(removeTodo({ id }));
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }));
      setEditText('');
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map( (todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span>{todo.text}</span>
            <button onClick={() => handleToggle(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => setEditText(todo.text)}>Edit</button>
            {editText && (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                />
                <button onClick={() => handleUpdate(todo.id)}>Update</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
