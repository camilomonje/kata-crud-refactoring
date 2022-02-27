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

  return (
    <div >
      {currentList.map((group) => {
        return <Group key={group.groupId} group={group} />;
      })}
    </div>
  );
};
export default GroupsList;
