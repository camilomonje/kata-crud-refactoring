import React, { Fragment } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Group = ({ onDelete, group }) => {
  return (
    <Fragment>
      <div>
        <h5>{group.groupName}</h5>
        <button onClick={() => onDelete(group.groupId)}>Eliminar</button>
      </div>

      <div>
        <TaskForm groupId={group.groupId}/>
      </div>
      <div>
        <TaskList todoList={group.toDoDtos} />
      </div>
      <hr></hr>
    </Fragment>
  );
};
export default Group;
