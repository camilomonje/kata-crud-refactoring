import React, { Fragment } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Group = ({ onDelete, group }) => {
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
