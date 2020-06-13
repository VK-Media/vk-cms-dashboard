import React from 'react'
import styles from '../Frontend.module.scss'

const FrontendContent: React.FC = ({ children }) => {
    return <main className={styles.content}>{children}</main>
}

export default FrontendContent
