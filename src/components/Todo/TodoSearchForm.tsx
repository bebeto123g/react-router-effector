import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './Todo.module.scss'

const TodoSearchForm = () => {
    const [SearchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState<string>(SearchParams.get('search') || '')


    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        setSearchParams({ search })
    }

    const handler: ChangeEventHandler<HTMLInputElement> = (event) => {
        const searchValue = event.target.value.toLowerCase()
        setSearch(searchValue)
        setSearchParams({ search: searchValue })
    }

    return (
        <form className={styles.addTodo} onSubmit={submitHandler}>
            <input
                value={search}
                type='text'
                onChange={handler}
                name={'add-todo'}
                className={styles.addInput}
            />
            <button type='submit'>Найти</button>
        </form>
    )
}

export default TodoSearchForm
