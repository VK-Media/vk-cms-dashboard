import React from 'react'
import { buttonTypes } from '../../../interfaces/button.interfaces'
import styles from './Buttons.module.scss'

interface ITextButtonProps {
    text: string
    type: buttonTypes
}

const TextButton: React.FC<ITextButtonProps> = ({ text, type }) => {
    return <div className={`${styles['text-button']} ${styles[type]}`}>{text}</div>
}

export default TextButton
