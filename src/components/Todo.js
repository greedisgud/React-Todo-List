import React from "react";

function Todo({ todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todoItem ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <div className="buttons">
        <button onClick={completedHandler} className="complete-btn btn">
          ✅
        </button>
        <button onClick={deleteHandler} className="trash-btn btn">
          🗑️
        </button>
      </div>
    </div>
  );
}

export default Todo;
