import React from 'react'
import FrontendContent from './Content/Content'
import styles from './Frontend.module.scss'
import FrontendNavigation from './Navigation/Navigation'

const FrontendLayout: React.FC = ({ children }) => {
    return <div className={styles.layout}>
        <FrontendNavigation/>
        <FrontendContent>{children}</FrontendContent>
    </div>
}

export default FrontendLayout
