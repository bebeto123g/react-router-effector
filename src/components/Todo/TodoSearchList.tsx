import React, { FC, useEffect, useState, useTransition } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from 'effector-react'
import styles from './Todo.module.scss'

import { $usersGetStatus, ITodo } from '../../store/todos'
import Todo from './Todo'
import Loader from '../../UI/Loader/Loader'

const TodoSearchList: FC<{ search: string }> = ({ search }) => {
    const { todos } = useStore($usersGetStatus)
    const [filterTodo, setFilterTodo] = useState<ITodo[]>([])
    const navigate = useNavigate()
    const [isPendingTransitin, startTransition] = useTransition()

    useEffect(() => {
        if (!todos.length) {
            navigate('/list')
        }
    }, [todos, navigate])

    useEffect(() => {
        startTransition(() => {
            const searchArray = [...todos].filter(
                (todo) => todo.title.toLowerCase().indexOf(search) !== -1,
            )
            setFilterTodo(searchArray)
        })
    }, [search, todos])

    if (isPendingTransitin) return <Loader color='orange' />

    if (!filterTodo.length) {
        return (
            <p>
                Ничего не найдено по запросу <q>{search}</q>
            </p>
        )
    }

    return (
        <ul className={styles.list}>
            {filterTodo.map((todo) => {
                return <Todo todo={todo} key={todo.id} />
            })}
        </ul>
    )
}

export default TodoSearchList
