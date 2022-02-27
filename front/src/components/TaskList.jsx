import React from "react";

import Task from "./Task.jsx";

const TaskList = (props) => {
  const decorationDone = {
    textDecoration: "line-through",
  };

  const todoList = props.todoList;
  if (todoList) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td><h6>ID</h6></td>
              <td><h6>TAREA</h6></td>
              <td><h6>¿COMPLETADO?</h6></td>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo) => {
              return (
                <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
                  <Task todo={todo} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  return <div></div>;
};
export default TaskList;
