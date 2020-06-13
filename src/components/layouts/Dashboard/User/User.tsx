import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import avatar from '../../../../avatars/rlvk.jpeg'
import { removeTokenFromLocalStorage } from '../../../../utils/authentication.utils'
import styles from './User.module.scss'

const User: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { t } = useTranslation()

    const handleLogoutClick = () => {
        setShowMenu(false)
        removeTokenFromLocalStorage()

        window.location.replace('/')
    }

    const renderMenu = () => {
        if (showMenu) {
            return (
                <div className={styles.menu}>
                    <div className={styles.item}>{t('Profile')}</div>
                    <div className={`${styles.item} ${styles.logout}`} onClick={handleLogoutClick}>{t('Log out')}</div>
                </div>
            )
        }

        return null
    }

    return (
        <>
            <div
                className={styles.avatar}
                onClick={() => setShowMenu(!showMenu)}
                style={{ backgroundImage: `url(${avatar})` }}
            />
            {renderMenu()}
        </>
    )
}

export default User
