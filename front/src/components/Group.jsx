import React, { Fragment, useContext } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Store from "./Store.js";
import C from "../utils/constants";
const HOST_API = C.HOST_API;

const Group = ({ group }) => {

  const {
    dispatch
  } = useContext(Store);

  const onDelete = (id) => {
    console.log("Delete " + id);
    fetch(HOST_API + "/" + id + "/group", {
      method: "DELETE",
    }).then((listGroup) => {
      dispatch({ type: "delete-group", id });
    });
  };

  return (
    <Fragment>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <h5>{group.groupName}</h5>
              </td>
              <td>
                <button onClick={() => onDelete(group.groupId)}>
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <TaskForm groupId={group.groupId} />
      </div>
      <div>
        <TaskList todoList={group.toDoDtos} />
      </div>
      <hr></hr>
    </Fragment>
  );
};
export default Group;
