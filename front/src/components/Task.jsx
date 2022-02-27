import React, { Fragment, useContext } from "react";
import C from "../utils/constants";
import Store from "./Store.js";
const HOST_API = C.HOST_API;

const Task = ({todo}) => {

  const {
    dispatch
  } = useContext(Store);
  
  const onDelete = (id, groupId) => {
    fetch(HOST_API + "/" + id + "/todo", {
      method: "DELETE",
    }).then(() => {
      dispatch({ type: "delete-item", id: id, groupId: groupId });
    });
  };

  const onEdit = (todo) => {

    dispatch({ type: "edit-item", item: todo });
  };

  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked,
      groupId: todo.groupId
    };
    fetch(HOST_API + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
      });
  };

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
        <button onClick={() => onDelete(todo.id, todo.groupId)}>Eliminar</button>
      </td>
      <td>
        <button onClick={() => onEdit(todo)}>Editar</button>
      </td>
    </Fragment>
  );
};
export default Task;
