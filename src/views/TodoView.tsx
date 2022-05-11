import React, { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStore } from 'effector-react'

import { $todosStore } from '../store/todos'
import { Link } from 'react-router-dom'

const TodoView: FC = () => {
    const navigate = useNavigate()
    const { todoId } = useParams()
    const todos = useStore($todosStore)

    useEffect(() => {
        if (!todos.length) {
            navigate('/list')
        }
    }, [todos, navigate])

    const todo = todos.find((todo) => todo.id === Number(todoId))

    if (!todo) {
        return (
            <h3>
                Оказия! <Link to={'/list'}>Перейти к списку</Link>
            </h3>
        )
    }

    return (
        <div>
            <h3>ID:{todo.id}</h3>
            <p>Пользователь: {todo.userId}</p>
            <p>{todo.title}</p>
            <Link to={'/list'} className='btn'>
                Перейти к списку
            </Link>
        </div>
    )
}

export default TodoView
