function reducer(state, action) {
  switch (action.type) {
    case "update-listGroup":
      const groupUpList = state.group;
      groupUpList.listGroup = action.listGroup;
      return { ...state, group: groupUpList };

    case "add-group":
      const groupUp = state.group.listGroup;
      groupUp.push(action.itemGroup);
      return { ...state, group: { listGroup: groupUp, itemGroup: {} } };

    case "delete-group":
      const groupUpDelete = state.group;
      const listGroupUpdate = groupUpDelete.listGroup.filter((item) => {
        return item.groupId !== action.id;
      });
      groupUpDelete.listGroup = listGroupUpdate;
      return { ...state, group: groupUpDelete };

    case "update-item":
      const groupList = state.group.listGroup;
      const newGroupList = groupList.map((group) => {
        if (group.groupId === action.item.groupId) {
          const newToDoDtos = group.toDoDtos.map((todo) => {
            if (todo.id === action.item.id) {
              return action.item;
            }
            return todo;
          });
          return { ...group, toDoDtos: newToDoDtos };
        }
        return group;
      });
      const groupListUpdate = { listGroup: newGroupList, itemGroup: {} };
      return { ...state, group: groupListUpdate };

    case "delete-item":
      const grouplist = state.group.listGroup;
      const newGrouplist = grouplist.map((group) => {
        if (group.groupId === action.groupId) {
          const newToDodtos = group.toDoDtos.filter((item) => {
            return item.id !== action.id;
          });
          return { ...group, toDoDtos: newToDodtos };
        }
        return group;
      });

      const groupListUp = { listGroup: newGrouplist, itemGroup: {} };
      return { ...state, group: groupListUp };

    case "update-list":
      const todoUpList = state.todo;
      todoUpList.list = action.list;
      return { ...state, todo: todoUpList };

    case "update-act":
      const groupAct = state.group.listGroup;
      const newGroupAct = groupAct.map((group) => {
        if (group.groupId === action.item.groupId) {
          const newToDoDtos = group.toDoDtos.map((todo) => {
            if (todo.id === action.item.id) {
              return action.item;
            }
            return todo;
          });

          return { ...group, toDoDtos: newToDoDtos };
        }
        return group;
      });

      const stateTodo = state.todo;
      stateTodo.item = {};

      const groupListAct = { listGroup: newGroupAct, itemGroup: {} };
      return { ...state, group: groupListAct, todo: stateTodo };

    case "edit-item":
      //const groupUpEdit = state.group.list;

      
      const todoUpEdit = state.todo;
      todoUpEdit.item = action.item;
      return { ...state, todo: todoUpEdit };

    case "add-item":
      const todoUp = state.todo.list;
      todoUp.push(action.item);
      return { ...state, todo: { list: todoUp, item: {} } };

    default:
      return state;
  }
}
export default reducer;
