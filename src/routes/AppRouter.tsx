import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import PageLoader from '../UI/Loader/PageLoader'
import { routes } from './routes'

// useRoutes делает перерендер компонента при каждом изменении адреса
const AppRouter = () => {
    const appRoutes = useRoutes(routes)
    return <Suspense fallback={<PageLoader />}>{appRoutes}</Suspense>
}

export default AppRouter
