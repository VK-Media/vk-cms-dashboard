import React from 'react'
import styles from './Widget.module.scss'

const Widget: React.FC = ({ children }) => {
    return <div className={styles.widget}>{children}</div>
}

export default Widget
