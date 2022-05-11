import React, { AllHTMLAttributes, FC } from 'react'
import styles from './Container.module.scss'

const Container: FC<AllHTMLAttributes<HTMLDivElement>> = ({
    children,
    className = '',
    ...props
}) => (
    <div className={`${styles.container} ${className}`} {...props}>
        {children}
    </div>
)

export default Container
