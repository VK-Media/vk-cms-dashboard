import React from 'react'
import { connect } from 'react-redux'
import avatar from '../../../../avatars/rlvk.jpeg'
import { ReactComponent as SettingsIcon } from '../../../../icons/cog.svg'
import { ReactComponent as SingletonsIcon } from '../../../../icons/gem.svg'
import { ReactComponent as CollectionsIcon } from '../../../../icons/layer-group.svg'
import { ReactComponent as MediaIcon } from '../../../../icons/photo-video.svg'
import { ReactComponent as DashboardIcon } from '../../../../icons/tachometer-fast.svg'
import { ReactComponent as UserGroupsIcon } from '../../../../icons/user-lock.svg'
import { ReactComponent as UsersIcon } from '../../../../icons/users.svg'
import { toggleMenu } from '../../../../redux/dashboard/dashboard.actions'
import styles from '../DashboardLayout.module.scss'
import NavigationLink from './NavLink/NavigationLink'

interface IDashboardNavigationProps {
    toggleMenu(): void
}

const DashboardNavigation: React.FC<IDashboardNavigationProps> = ({ toggleMenu }) => {
    return (
        <aside className={styles['dashboard-navigation']}>
            <div className={styles['toggle-menu']} onClick={toggleMenu}><span/><span/><span/></div>

            <nav>
                <NavigationLink iconComponent={<DashboardIcon/>} title="Dashboard" url="/dashboard"/>
                <NavigationLink iconComponent={<MediaIcon/>} title="Media" url="/media"/>
                <NavigationLink iconComponent={<CollectionsIcon/>} title="Collections" url="/collections"/>
                <NavigationLink iconComponent={<SingletonsIcon/>} title="Singletons" url="/singletons"/>
                <NavigationLink iconComponent={<UsersIcon/>} title="Users" url="/users"/>
                <NavigationLink iconComponent={<UserGroupsIcon/>} title="User Groups" url="/user-groups"/>
                <NavigationLink iconComponent={<SettingsIcon/>} title="Settings" url="/settings"/>
            </nav>

            <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }}/>
        </aside>
    )
}

export default connect(null, { toggleMenu })(DashboardNavigation)
