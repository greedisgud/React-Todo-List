import React from "react";
import uniqid from "uniqid";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  const handleTaskInput = (e) => {
    setInputText(e.target.value);
  };

  const todoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: uniqid() }]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className="taskForm">
      <label></label>
      <input
        className="input"
        onChange={handleTaskInput}
        type="text"
        placeholder="Enter a Task..."
        value={inputText}
      />
      <button className="submitBtn" onClick={todoHandler} type="submit">
        ➕
      </button>
      <div className="select">
        <select onChange={statusHandler}>
          <option>All</option>
          <option>Incomplete</option>
          <option>Complete</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
