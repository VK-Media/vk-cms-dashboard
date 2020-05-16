import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Button.module.scss'
import { buttonFontSizes, buttonTypes, buttonVariants, IButtonProps } from './ButtonTypes'

const Button: React.FC<IButtonProps> = ({
    text,
    type = buttonTypes.DEFAULT,
    variant = buttonVariants.DEFAULT,
    href,
    onClick,
    space,
    fontSize = buttonFontSizes.SMALL
}) => {
    const classes = [styles.button, styles[`variant-${variant}`], styles[`type-${type}`]]

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

    if (fontSize) {
        classes.push(styles[`font-size-${fontSize}`])
    }

    if (href) {
        return <NavLink to={href} className={classes.join(' ')}>{text}</NavLink>
    }

    if (onClick) {
        return <button onClick={() => onClick()} className={classes.join(' ')}>{text}</button>
    }

    return <button className={classes.join(' ')}>{text}</button>
}

export default Button
