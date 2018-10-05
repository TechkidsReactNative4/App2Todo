import { PICK_CATEGORY, ADD_TASK, TOGGLE_TASK, DEL_TASK } from './type'

export const pickCategory = (category) => ({
  type: PICK_CATEGORY,
  payload: category
})

export const addTask = (data) => ({
  type: ADD_TASK,
  //data: {id, date, task}
  payload: data
})

export const toggleTask = (data) => ({
  type: TOGGLE_TASK,
  //data: {dayId, taskId}
  payload: data
})

export const delTask = (data) => ({
  type: DEL_TASK,
  //data: {dayId, taskId}
  payload: data
})