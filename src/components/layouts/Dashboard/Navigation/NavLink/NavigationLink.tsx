import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../DashboardLayout.module.scss'

interface INavigationLinkProps {
    iconComponent: React.ReactNode
    title: string
    url: string
}

const NavigationLink: React.FC<INavigationLinkProps> = ({ iconComponent, title, url }) => {
    return (
        <NavLink to={url} activeClassName={styles.active}>
            <div className={styles['icon-wrapper']}>{iconComponent}</div>
            <span className={styles.title}>{title}</span>
        </NavLink>
    )
}

export default NavigationLink
