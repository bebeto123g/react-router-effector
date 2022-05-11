import { combine, createEffect, createEvent, createStore } from 'effector'
import { getTodosPage } from '../../API/getTodo'
import {
    addTodoAction,
    removeTodoAction,
    setNewTodoAction,
    toggleTodoAction,
    updateTodoAction,
} from './init'

export interface ITodo {
    userId: number
    id: number
    title: string
    completed: boolean
}

export const initTodosState = [] as ITodo[]

export const initTodosStateSide = {
    newTodo: '',
}

export type ITodosSideStore = typeof initTodosStateSide

export const setNewTodo = createEvent<string | undefined>()
export const setLoadingTodo = createEvent()

export const addTodo = createEvent<string>()
export const updateTodo = createEvent<{ id: number; title: string }>()
export const removeTodo = createEvent<number>()
export const toggleTodo = createEvent<number>()
export const getTodosFx = createEffect<number, ITodo[], any>(async (page = 0) => {
    return await getTodosPage(page)
})

export const $todosSideStore = createStore<ITodosSideStore>(initTodosStateSide).on(
    setNewTodo,
    setNewTodoAction,
)

export const $todosStore = createStore<ITodo[]>(initTodosState)
    .on(getTodosFx.doneData, (_, todos) => todos)
    .on(addTodo, addTodoAction)
    .on(updateTodo, updateTodoAction)
    .on(removeTodo, removeTodoAction)
    .on(toggleTodo, toggleTodoAction)

export const $usersGetStatus = combine({
    isPending: getTodosFx.pending,
    todos: $todosStore,
    newTitleTodo: $todosSideStore,
})
