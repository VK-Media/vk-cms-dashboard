import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import avatar from '../../../avatars/rlvk.jpeg'
import { ReactComponent as SettingsIcon } from '../../../icons/cog.svg'
import { ReactComponent as SingletonsIcon } from '../../../icons/gem.svg'
import { ReactComponent as CollectionsIcon } from '../../../icons/layer-group.svg'
import { ReactComponent as MediaIcon } from '../../../icons/photo-video.svg'
import { ReactComponent as DashboardIcon } from '../../../icons/tachometer-fast.svg'
import { ReactComponent as UserGroupsIcon } from '../../../icons/user-lock.svg'
import { ReactComponent as UsersIcon } from '../../../icons/users.svg'
import { toggleMenu } from '../../../redux/dashboard/dashboard.actions'
import styles from './DashboardLayout.module.scss'

interface IDashboardNavigationProps {
    toggleMenu(): void
}

const DashboardNavigation: React.FC<IDashboardNavigationProps> = ({ toggleMenu }) => {
    return (
        <aside className={styles['dashboard-navigation']}>
            <div className={styles['toggle-menu']} onClick={toggleMenu}><span/><span/><span/></div>
            <nav>
                <NavLink to={'/dashboard'} activeClassName={styles.active}>
                    <DashboardIcon/>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to={'/media'} activeClassName={styles.active}>
                    <MediaIcon/>
                    <span>Media</span>
                </NavLink>
                <NavLink to={'/collections'} activeClassName={styles.active}>
                    <CollectionsIcon/>
                    <span>Collections</span>
                </NavLink>
                <NavLink to={'/singletons'} activeClassName={styles.active}>
                    <SingletonsIcon/>
                    <span>Singletons</span>
                </NavLink>
                <NavLink to={'/users'} activeClassName={styles.active}>
                    <UsersIcon/>
                    <span>Users</span>
                </NavLink>
                <NavLink to={'/user-groups'} activeClassName={styles.active}>
                    <UserGroupsIcon/>
                    <span>User Groups</span>
                </NavLink>
                <NavLink to={'/settings'} activeClassName={styles.active}>
                    <SettingsIcon/>
                    <span>Settings</span>
                </NavLink>
            </nav>
            <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }}/>
        </aside>
    )
}

export default connect(null, { toggleMenu })(DashboardNavigation)
