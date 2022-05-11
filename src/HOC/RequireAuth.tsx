import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useStore } from 'effector-react'
import { $userForm } from '../store/user'

 {/* @ts-ignore */}
const RequireAuth = ({ children }) => {
    const isAuth = useStore($userForm).isAuth
    const location = useLocation()

    if (!isAuth) {
        // при переадресации можно прокидывать через state, он так же есть в useNavigate
        return <Navigate to={'/login'} state={{ from: location }} />
    }

    return children
}

export default RequireAuth
