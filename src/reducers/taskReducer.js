import { ADD_TASK, TOGGLE_TASK, DEL_TASK } from '../actions/type'

export default function (state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      //1. check xem ngay do da co task chua
      //2. add task
      //3. sort

      const tasksOfDay = state.filter(item => item.id === action.payload.id)
      // [{...(1)}]

      if (tasksOfDay.length === 0) {
        //1. lay tat ca obj trong list cu
        //2. add them object moi
        //3. sort
        return [
          ...state,
          {
            id: action.payload.id,
            date: action.payload.date,
            data: [
              action.payload.task
            ]
          }
        ].sort((day1, day2) => day1.id - day2.id)
      } else {
        //1. lay tat ca obj trong list cu tru ngay can add
        //2. add them vao ngay do
        //3. sort
        return [
          ...(state.filter(item => item.id !== action.payload.id)),
          {
            id: action.payload.id,
            date: action.payload.date,
            data: [
              ...(tasksOfDay[0].data),
              action.payload.task
            ].sort((task1, task2) => task1.id - task2.id)
          }
        ].sort((day1, day2) => day1.id - day2.id)
      }

    case TOGGLE_TASK:
      return state.map(item => (item.id === action.payload.dayId)
        ? {
          id: item.id,
          date: item.date,
          data: item.data.map(task => (task.id === action.payload.taskId)
            ? {
              id: task.id,
              category: task.category,
              time: task.time,
              content: task.content,
              isDone: !task.isDone
            }
            : task)
        }
        : item)

    case DEL_TASK:
      const taskssOfDay = state.filter(item => item.id === action.payload.dayId)

      return [
        ...(state.filter(item => item.id !== action.payload.dayId)),
        {
          id: taskssOfDay[0].id,
          date: taskssOfDay[0].date,
          data: taskssOfDay[0].data
            .filter(task => task.id !== action.payload.taskId)
        }
      ].sort((day1, day2) => day1.id - day2.id)

    default:
      return state
  }
}