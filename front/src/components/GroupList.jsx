import React, { useContext, useEffect } from "react";
import Store from "./Store.js";
import C from "../utils/constants";
import Group from "./Group.jsx";
const HOST_API = C.HOST_API;

const GroupsList = () => {
  const {
    dispatch,
    state: { group },
  } = useContext(Store);
  const currentList = group.listGroup;

  useEffect(() => {
    fetch(HOST_API + "/groups")
      .then((response) => response.json())
      .then((listGroup) => {
        dispatch({ type: "update-listGroup", listGroup });
      });
  }, [dispatch]);

  const onDelete = (id) => {
    console.log("Delete " + id);
    fetch(HOST_API + "/" + id + "/group", {
      method: "DELETE",
    }).then((listGroup) => {
      dispatch({ type: "delete-group", id });
    });
  };

  return (
    <div>
      {currentList.map((group) => {
        return <Group key={group.groupId} onDelete={onDelete} group={group} />;
      })}
    </div>
  );
};
export default GroupsList;
