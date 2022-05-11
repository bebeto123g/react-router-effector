import React, { FC } from 'react'
import { NavLinkProps, NavLink } from 'react-router-dom'
import styles from './NavLink.module.scss'

const AppNavLink: FC<NavLinkProps> = ({ children, className = '', ...props }) => {
    return (
        <NavLink
            {...props}
            className={({ isActive }) =>
                `${className} ${styles.link} ${isActive ? styles.active : ''}`
            }
        >
            {children}
        </NavLink>
    )
}

export default AppNavLink
