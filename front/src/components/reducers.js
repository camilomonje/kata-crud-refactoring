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
      const todoUpItem = state.todo;
      const listUpdateEdit = todoUpItem.list.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }

        return item;
      });
      todoUpItem.list = listUpdateEdit;
      todoUpItem.item = {};
      return { ...state, todo: todoUpItem };
    case "delete-item":
      const todoUpDelete = state.todo;
      const listUpdate = todoUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      todoUpDelete.list = listUpdate;
      return { ...state, todo: todoUpDelete };
    case "update-list":
      const todoUpList = state.todo;
      todoUpList.list = action.list;
      return { ...state, todo: todoUpList };
    case "edit-item":
      console.log("edit")
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
