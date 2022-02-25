import React, { useContext, useEffect } from "react";
import Store from "./Store.js";
import C from "../utils/constants";
import Task from "./Task.jsx";
const HOST_API = C.HOST_API;

const TaskList = (props) => {
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);

  // useEffect(() => {
  //   fetch(HOST_API + "/todos")
  //     .then((response) => response.json())
  //     .then((list) => {
  //       dispatch({ type: "update-list", list });
  //     });
  // }, [dispatch]);

  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todo", {
      method: "DELETE",
    }).then((list) => {
      dispatch({ type: "delete-item", id });
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
              <td>ID</td>
              <td>Tarea</td>
              <td>¿Completado?</td>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo) => {
              return (
                <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
                  <Task
                    todo={todo}
                    onChange={onChange}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
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
