import React from 'react'
import { NavLink } from 'react-router-dom'
import { buttonTypes } from '../../../interfaces/button.interfaces'
import styles from './Buttons.module.scss'

type Space = 1 | 2 | 3

interface ISpace {
    top?: Space
    right?: Space
    bottom?: Space
    left?: Space
}

interface ITextButtonProps {
    text: string
    type?: buttonTypes
    href?: string
    onClick?: any
    space?: ISpace
}

const TextButton: React.FC<ITextButtonProps> = ({ text, type, href, onClick, space }) => {
    const classes = [styles['text-button']]

    if (space) {
        if (space.top) {
            classes.push(styles[`space-top-${space.top}`])
        }

        if (space.right) {
            classes.push(styles[`space-right-${space.right}`])
        }

        if (space.bottom) {
            classes.push(styles[`space-bottom-${space.bottom}`])
        }

        if (space.left) {
            classes.push(styles[`space-left-${space.left}`])
        }
    }

    if (type) {
        classes.push(styles[type])
    }

    if (href) {
        return <NavLink to={href} className={classes.join(' ')}>{text}</NavLink>
    }

    if (onClick) {
        return <div onClick={() => onClick()} className={classes.join(' ')}>{text}</div>
    }

    return <div className={classes.join(' ')}>{text}</div>
}

export default TextButton
