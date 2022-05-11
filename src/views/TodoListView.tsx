import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

import Container from '../UI/Container/Container'
import TodoSearchForm from '../components/Todo/TodoSearchForm'
import TodoSearchList from '../components/Todo/TodoSearchList'

const TodoListView = () => {
    const [SearchParams] = useSearchParams()
    const search = SearchParams.get('search')

    return (
        <Container>
            <h1>TodoList Page</h1>
            <TodoSearchForm />
            {search ? <TodoSearchList search={search} /> : <Outlet />}
        </Container>
    )
}

export default TodoListView
