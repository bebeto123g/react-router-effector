import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

import TodoList from '../components/Todo/TodoList'
import RequireAuth from '../HOC/RequireAuth'

import HomeView from '../views/HomeView'
const TodoListView = lazy(() => import('../views/TodoListView'))
const AboutView = lazy(() => import('../views/AboutView'))
const LoginView = lazy(() => import('../views/LoginView'))
const TodoView = lazy(() => import('../views/TodoView'))

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomeView />,
    },
    {
        path: 'list',
        element: <TodoListView />,
        children: [
            {
                path: '',
                element: <TodoList />,
            },
            {
                path: ':todoId',
                element: <TodoView />,
            },
        ],
    },
    {
        path: 'about',
        element: (
            <RequireAuth>
                <AboutView />
            </RequireAuth>
        ),
    },
    {
        path: 'login',
        element: <LoginView />,
    },
    {
        path: '*',
        element: <Navigate to='/' replace />,
    },
]
