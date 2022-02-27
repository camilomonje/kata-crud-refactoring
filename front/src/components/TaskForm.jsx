import React, { useRef, useState, useContext } from "react";
import Store from "./Store.js";
import C from "../utils/constants";
const HOST_API = C.HOST_API;

const TaskForm = ({ group }) => {
  const formRef = useRef(null);
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      completed: false,
      groupId: group.groupId,
    };

    fetch(HOST_API + "/todo", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((listGroup) => {
        dispatch({ type: "update-listGroup", listGroup });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted,
      groupId: group.groupId,
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
        dispatch({ type: "update-act", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  var def = "";
  var est = false;

  if (group.groupId === item.groupId) {
    def = item.name;

    if (item.id !== {}) {
      est = true;
    }
  }

  return (
    <div>
      <form ref={formRef} className="input-group mb-3">
        <input
          id="texto"
          type="text"
          name="name"
          className="form-control"
          placeholder="¿Qué piensas hacer hoy?"
          defaultValue={def}
          onChange={(event) => {
            setState({ ...state, name: event.target.value });
          }}
        ></input>
        <div className="input-group-append">
          {est && (
            <button
              className="btn btn-primary"
              disabled={!state.name}
              onClick={onEdit}
            >
              Actualizar
            </button>
          )}
          {!est && (
            <button
              className="btn btn-success"
              disabled={!state.name}
              onClick={onAdd}
            >
              Crear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default TaskForm;
