import React from 'react'
import { NavLink } from 'react-router-dom'
import { buttonTypes } from '../../../interfaces/button.interfaces'
import styles from './Buttons.module.scss'

interface IDefaultButtonProps {
    text: string
    type?: buttonTypes
    href?: string
}

const DefaultButton: React.FC<IDefaultButtonProps> = ({ text, type, href }) => {
    const classes = [styles.button]

    if (type) {
        classes.push(styles[type])
    }

    if (href) {
        return <NavLink to={href} className={classes.join(' ')}>{text}</NavLink>
    }

    return <button className={classes.join(' ')}>{text}</button>
}

export default DefaultButton
