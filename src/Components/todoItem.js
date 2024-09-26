import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../Redux/actions';
import '../css/style.css';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTodo(todo.id, editText));
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            className="edit-input"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span className="todo-text">{todo.text}</span>
          <div>
            <button className="edit-btn" onClick={handleEdit}>Edit</button>
            <button className="remove-btn" onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
