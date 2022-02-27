import React, { useContext } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Store from "./Store.js";
import C from "../utils/constants";
const HOST_API = C.HOST_API;

const Group = ({ group }) => {
  const { dispatch } = useContext(Store);

  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/group", {
      method: "DELETE",
    }).then(() => {
      dispatch({ type: "delete-group", id });
    });
  };

  return (
    <div>
      <div className="border border-dark">
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <br />
                  <h5>{group.groupName}</h5>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(group.groupId)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <TaskForm group={group} />
        </div>
        <div>
          <TaskList todoList={group.toDoDtos} />
        </div>
        <br />
      </div>
      <div>
        <br />
      </div>
    </div>
  );
};
export default Group;
