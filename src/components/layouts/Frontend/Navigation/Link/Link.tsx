import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import styles from '../../Frontend.module.scss'

interface IFrontendNavigationLinkProps {
    text: string
    url: string
}

const FrontendNavigationLink: React.FC<IFrontendNavigationLinkProps> = ({ text, url }) => {
    const { t } = useTranslation()

    return (
        <NavLink exact to={t(url)} activeClassName={styles.active}>{t(text)}</NavLink>
    )
}

export default FrontendNavigationLink
