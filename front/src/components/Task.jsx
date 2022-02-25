import React, { Fragment } from "react";

const Task = ({ todo, onChange, onEdit, onDelete }) => {
  

  return (
    <Fragment>
      <td>{todo.id}</td>
      <td>{todo.name}</td>
      <td>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={(event) => onChange(event, todo)}
        ></input>
      </td>
      <td>
        <button onClick={() => onDelete(todo.id)}>Eliminar</button>
      </td>
      <td>
        <button onClick={() => onEdit(todo)}>Editar</button>
      </td>
    </Fragment>
  );
};
export default Task;
