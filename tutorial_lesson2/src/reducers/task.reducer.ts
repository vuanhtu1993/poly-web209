const taskReducer = (draft: { name: string, isDone: boolean, id: number }[]
  , action: { type: string, payload: any }) => {
  // return next state
  // Thêm
  // Thay đổi trạng thái
  // Xoá
  let index: number
  switch (action.type) {
    case "ADD":
      // mutate
      // return [...state, action.payload]
      draft.push(action.payload)
      break;
    case "CHANGE_STATUS":
      index = draft.findIndex(item => item.id == action.payload)
      draft[index].isDone = !draft[index].isDone
      break;
    default:
      return draft
  }
}

export default taskReducer
