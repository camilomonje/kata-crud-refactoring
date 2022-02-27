import React, { useContext, useRef, useState } from "react";
import Store from "./Store.js";
import C from "../utils/constants";
const HOST_API = C.HOST_API;

const GroupForm = () => {
  const formGroupRef = useRef(null);
  const {
    dispatch,
    state: { group },
  } = useContext(Store);
  const item = group.itemGroup;
  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();

    const request = {
      groupName: state.groupName,
      toDoDtos: [],
    };

    fetch(HOST_API + "/group", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((group) => {
        dispatch({ type: "add-group", itemGroup: group });
        setState({ groupName: "" });
        formGroupRef.current.reset();
      });
  };

  return (
    <form ref={formGroupRef} className="input-group mb-3">
      <input
        type="text"
        placeholder="Lista de TO-DO"
        name="groupName"
        className="form-control"
        onChange={(event) => {
          setState({ ...state, groupName: event.target.value.toUpperCase() });
        }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-success"
          disabled={!state.groupName}
          onClick={onAdd}
        >
          Nueva Lista
        </button>
      </div>
    </form>
  );
};
export default GroupForm;
