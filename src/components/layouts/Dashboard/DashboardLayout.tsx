import React from 'react'
import { useSelector } from 'react-redux'
import { IState } from '../../../types/redux/general.types'
import AuthenticationWrapper from '../../authentication/AuthenticationWrapper'
import DashboardContent from './DashboardContent'
import styles from './DashboardLayout.module.scss'
import DashboardNavigation from './Navigation/DashboardNavigation'

const DashboardLayout: React.FC = ({ children }) => {
    const menuExpanded = useSelector((state: IState) => state.dashboard.menuExpanded)

    const dashboardLayoutClasses = () => {
        const classes = [styles['dashboard-layout']]

        if (menuExpanded) {
            classes.push(styles['menu-expanded'])
        }

        return classes.join(' ')
    }

    return (
        <AuthenticationWrapper>
            <div className={dashboardLayoutClasses()}>
                <DashboardNavigation/>
                <DashboardContent>{children}</DashboardContent>
            </div>
        </AuthenticationWrapper>
    )
}

export default DashboardLayout
