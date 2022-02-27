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
      groupName : state.groupName,
      toDoDtos: []
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
        console.log(group);
        dispatch({ type: "add-group", itemGroup: group });
        setState({ groupName: "" });
        formGroupRef.current.reset();
      });
  };

  return (
    <form ref={formGroupRef}>
      <input type="text" placeholder="Lista de TO-DO" name="groupName"
      onChange={(event) => {
        setState({ ...state, groupName: event.target.value });
      }} />
      <button onClick={onAdd}>Nueva Lista</button>
    </form>
  );
};
export default GroupForm;
