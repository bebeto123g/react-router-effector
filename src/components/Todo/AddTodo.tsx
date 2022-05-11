import React, { ChangeEventHandler, FormEventHandler } from 'react'
import { useStore } from 'effector-react'
import styles from './Todo.module.scss'

import { $todosSideStore, addTodo, setNewTodo } from '../../store/todos'
import TextInput from '../Forms/TextInput/TextInput'

const AddTodo = () => {
    const value = useStore($todosSideStore).newTodo

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        if (value.trim()) {
            addTodo(value.trim())
        }
    }

    const changehandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        setNewTodo(event.target.value)
    }

    return (
        <form className={styles.addTodo} onSubmit={submitHandler}>
            <TextInput
                labelText='Добавить задачу'
                value={value}
                onChange={changehandler}
                name={'add-todo'}
                className={styles.addInput}
            />
            <button type='submit'>Добавить</button>
        </form>
    )
}

export default AddTodo
