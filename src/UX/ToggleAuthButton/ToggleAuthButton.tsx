import React, { ButtonHTMLAttributes, FC } from 'react'
import { useStore } from 'effector-react'
import { $userForm, toggleUserAuth } from '../../store/user'

interface IToggleAuthButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    signin: string
    signout: string
    callback?: () => void
}

const ToggleAuthButton: FC<IToggleAuthButton> = ({ signin, signout, callback, ...props }) => {
    const isAuth = useStore($userForm).isAuth

    const handler = () => {
        toggleUserAuth()
        if (callback) {
            callback()
        }
    }

    return (
        <button {...props} onClick={handler}>
            {isAuth ? signout : signin}
        </button>
    )
}

export default ToggleAuthButton
