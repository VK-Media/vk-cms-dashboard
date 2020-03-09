import React from 'react'
import { NavLink } from 'react-router-dom'
import { buttonTypes } from '../../../interfaces/button.interfaces'
import styles from './Buttons.module.scss'

interface ITextButtonProps {
    text: string
    type?: buttonTypes
    href?: string
}

const TextButton: React.FC<ITextButtonProps> = ({ text, type, href }) => {
    const classes = [styles['text-button']]

    if (type) {
        classes.push(styles[type])
    }

    if (href) {
        return <NavLink to={href} className={classes.join(' ')}>{text}</NavLink>
    }

    return <div className={classes.join(' ')}>{text}</div>
}

export default TextButton
