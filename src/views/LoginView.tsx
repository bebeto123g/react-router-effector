import React, { FC } from 'react'
import { Location, useLocation, useNavigate } from 'react-router-dom'
import Container from '../UI/Container/Container'
import ToggleAuthButton from '../UX/ToggleAuthButton/ToggleAuthButton'

interface LocationState {
    from?: Location
}

const LoginView: FC = () => {
    const navigate = useNavigate()
    const { from } = useLocation().state as LocationState

    const callbackLogin = () => {
        navigate(from?.pathname || '/', { replace: true })
    }

    return (
        <Container>
            <h1>Login Page</h1>
            <ToggleAuthButton signin='Войти' signout='Выйти' callback={callbackLogin} />
        </Container>
    )
}

export default LoginView
