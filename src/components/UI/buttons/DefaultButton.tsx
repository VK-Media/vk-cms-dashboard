import React from 'react'
import { buttonTypes } from '../../../interfaces/button.interfaces'
import styles from './Buttons.module.scss'

interface IDefaultButtonProps {
    text: string
    type: buttonTypes
}

const DefaultButton: React.FC<IDefaultButtonProps> = ({ text, type }) => {
    return <button className={`${styles.button} ${styles[type]}`}>{text}</button>
}

export default DefaultButton
