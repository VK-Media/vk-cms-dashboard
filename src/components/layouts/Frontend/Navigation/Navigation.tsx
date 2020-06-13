import React from 'react'
import styles from '../Frontend.module.scss'
import FrontendNavigationLink from './Link/Link'

const FrontendNavigation = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.left}>
                <FrontendNavigationLink text="Home" url="/"/>
            </div>
            <div className={styles.right}>
                <FrontendNavigationLink text="Login" url="/login"/>
            </div>
        </nav>
    )
}

export default FrontendNavigation
