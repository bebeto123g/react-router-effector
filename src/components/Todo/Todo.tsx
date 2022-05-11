import React, { AllHTMLAttributes, FC } from 'react'
import { Link } from 'react-router-dom'
import { ITodo, removeTodo, toggleTodo } from '../../store/todos'
import styles from './Todo.module.scss'

interface ITodoProps extends AllHTMLAttributes<HTMLDivElement> {
    todo: ITodo
}

const Todo: FC<ITodoProps> = ({ todo, className = '', ...props }) => {
    console.log('render Todo')

    const wrapperStyles = `${styles.todoWrapper} ${className ?? ''} ${
        todo.completed ? styles.todoCompleted : ''
    }`

    return (
        <div className={wrapperStyles} {...props}>
            <input
                type='checkbox'
                name={`input-todo-${todo.id}`}
                id={`${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span className={styles.todoId}>{todo.id}.</span>
            <span className={styles.todoTitle}>{todo.title}</span>
            <Link to={String(todo.id)} className={`${styles.more}`}>Подробнее</Link>
            <button type='button' className={styles.todoRemove} onClick={() => removeTodo(todo.id)}>
                &times;
            </button>
        </div>
    )
}

export default Todo
