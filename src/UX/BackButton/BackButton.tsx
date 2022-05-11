import React, { ButtonHTMLAttributes, FC } from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    const navigate = useNavigate()
    // передача числа дает возможность ходить по истории вперед\назад по заданному количеству

    return (
        <button {...props} onClick={() => navigate(-1)}>
            {children}
        </button>
    )
}

export default BackButton
