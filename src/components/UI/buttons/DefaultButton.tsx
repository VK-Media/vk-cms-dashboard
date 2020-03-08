import React from 'react'
import { buttonTypes } from '../../../interfaces/button.interfaces'
import styles from './Buttons.module.scss'

interface IDefaultButtonProps {
    text: string
    type?: buttonTypes
}

const DefaultButton: React.FC<IDefaultButtonProps> = ({ text, type }) => {
    const classes = [styles.button]

    if (type) {
        classes.push(styles[type])
    }

    return <button className={classes.join(' ')}>{text}</button>
}

export default DefaultButton
