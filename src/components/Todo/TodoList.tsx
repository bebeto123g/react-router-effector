import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import styles from './Todo.module.scss'

import { $usersGetStatus, getTodosFx } from '../../store/todos'
import Loader from '../../UI/Loader/Loader'
import Todo from './Todo'
import AddTodo from './AddTodo'

const TodoList = () => {
    const { todos, isPending } = useStore($usersGetStatus)

    useEffect(() => {
        if (!todos.length) {
            getTodosFx(0)
        }
    }, [todos])

    if (isPending) return <Loader color='black' size='sm' />

    return (
        <>
            <AddTodo />
            <ul className={styles.list}>
                {todos.map((todo) => <Todo todo={todo} key={todo.title} />)}
            </ul>
        </>
    )
}

export default TodoList
