import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { ReactComponent as SettingsIcon } from '../../../../icons/cog.svg'
import { ReactComponent as SingletonsIcon } from '../../../../icons/gem.svg'
import { ReactComponent as CollectionsIcon } from '../../../../icons/layer-group.svg'
import { ReactComponent as MediaIcon } from '../../../../icons/photo-video.svg'
import { ReactComponent as DashboardIcon } from '../../../../icons/tachometer-fast.svg'
import { ReactComponent as UserGroupsIcon } from '../../../../icons/user-lock.svg'
import { ReactComponent as UsersIcon } from '../../../../icons/users.svg'
import { toggleMenu } from '../../../../redux/dashboard/dashboard.actions'
import styles from '../DashboardLayout.module.scss'
import User from '../User/User'
import NavigationLink from './NavLink/NavigationLink'

const DashboardNavigation: React.FC = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const handleNavigationToggle = () => {
        dispatch(toggleMenu())
    }

    return (
        <aside className={styles['dashboard-navigation']}>
            <div className={styles['toggle-menu']} onClick={handleNavigationToggle}><span/><span/><span/></div>

            <nav>
                <NavigationLink iconComponent={<DashboardIcon/>} title={t('Dashboard')} url={t('/dashboard')}/>
                <NavigationLink iconComponent={<MediaIcon/>} title={t('Media')} url={t('/media')}/>
                <NavigationLink iconComponent={<CollectionsIcon/>} title={t('Collections')} url={t('/collections')}/>
                <NavigationLink iconComponent={<SingletonsIcon/>} title={t('Singletons')} url={t('/singletons')}/>
                <NavigationLink iconComponent={<UsersIcon/>} title={t('Users')} url={t('/users')}/>
                <NavigationLink iconComponent={<UserGroupsIcon/>} title={t('User Groups')} url={t('/user-groups')}/>
                <NavigationLink iconComponent={<SettingsIcon/>} title={t('Settings')} url={t('/settings')}/>
            </nav>

            <User/>
        </aside>
    )
}

export default DashboardNavigation
