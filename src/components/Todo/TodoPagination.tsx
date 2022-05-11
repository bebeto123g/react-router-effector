import React, { useEffect, useState } from 'react'
import styles from './Todo.module.scss'
import { getTodosFx } from '../../store/todos'

const TodoPagination = () => {
    const [page, setPage] = useState<number>(0)

    useEffect(() => {
        getTodosFx(page)
        // просто имитация пагинации
    }, [page])

    const handler = (type: 'inc' | 'dec') => {
        const page = type === 'dec' ? -1 : 1
        setPage((prev) => prev + page)
    }

    return (
        <div className={styles.pagination}>
            <button onClick={() => handler('dec')} disabled={!page}>
                Предыдущая
            </button>
            <button>{page}</button>
            <button onClick={() => handler('inc')}>Следующая</button>
        </div>
    )
}

export default TodoPagination
