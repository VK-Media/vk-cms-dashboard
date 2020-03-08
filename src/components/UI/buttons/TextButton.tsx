import React from 'react'
import { buttonTypes } from '../../../interfaces/button.interfaces'
import styles from './Buttons.module.scss'

interface ITextButtonProps {
    text: string
    type?: buttonTypes
}

const TextButton: React.FC<ITextButtonProps> = ({ text, type }) => {
    const classes = [styles['text-button']]

    if (type) {
        classes.push(styles[type])
    }

    return <div className={classes.join(' ')}>{text}</div>
}

export default TextButton
