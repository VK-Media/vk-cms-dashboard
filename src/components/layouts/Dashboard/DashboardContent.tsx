import React from 'react'
import styles from './DashboardLayout.module.scss'

const DashboardContent: React.FC = ({ children }) => {
    return <main className={styles['dashboard-content']}>{children}</main>
}

export default DashboardContent
