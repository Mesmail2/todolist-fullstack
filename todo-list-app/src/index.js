import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue.trim(), completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      }),
    );
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="row">
        <div className="col-9">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add a new to-do item"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleAddTodo}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <ul className="list-group">
            {todos.map((todo, index) => (
              <li
                key={index}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  todo.completed ? "completed" : ""
                }`}
              >
                {todo.text}
                <div>
                  <button
                    className="btn btn-sm btn-success mr-2"
                    onClick={() => handleToggleTodo(index)}
                  >
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
