import { ChangeEvent } from 'react'
import { createEvent, createStore } from 'effector'

const USER_FORM_STORAGE_KEY = 'storage/user-form'

const initUserFormState = {
    name: '',
    lastName: '',
    isAuth: false,
}

export type IUserFormStore = typeof initUserFormState

const storageUserForm: string | null = localStorage.getItem(USER_FORM_STORAGE_KEY)
const userFormState: IUserFormStore = storageUserForm
    ? JSON.parse(storageUserForm)
    : initUserFormState

export const changeUserName = createEvent<ChangeEvent<HTMLInputElement>>()
export const changeUserLastName = createEvent<ChangeEvent<HTMLInputElement>>()
export const toggleUserAuth = createEvent()

export const $userForm = createStore<IUserFormStore>(userFormState)
    .on(changeUserName, (state, event) => {
        const newState = { ...state, name: event.target.value }
        localStorage.setItem(USER_FORM_STORAGE_KEY, JSON.stringify(newState))
        return newState
    })
    .on(changeUserLastName, (state, event) => {
        const newState = { ...state, lastName: event.target.value }
        localStorage.setItem(USER_FORM_STORAGE_KEY, JSON.stringify(newState))
        return newState
    })
    .on(toggleUserAuth, (state) => {
        const newState = { ...state, isAuth: !state.isAuth }
        localStorage.setItem(USER_FORM_STORAGE_KEY, JSON.stringify(newState))
        return newState
    })
