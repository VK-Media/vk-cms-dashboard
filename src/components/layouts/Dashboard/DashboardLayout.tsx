import React, { PropsWithChildren } from 'react'
import { connect } from 'react-redux'
import { IState } from '../../../types/redux/general.types'
import AuthenticationWrapper from '../../authentication/AuthenticationWrapper'
import DashboardContent from './DashboardContent'
import styles from './DashboardLayout.module.scss'
import DashboardNavigation from './DashboardNavigation'

interface IDashboardLayoutProps {
    menuExpanded: boolean
}

const DashboardLayout: React.FC<PropsWithChildren<IDashboardLayoutProps>> = ({ children, menuExpanded }) => {
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

const mapStateToProps = (state: IState) => {
    return {
        menuExpanded: state.dashboard.menuExpanded
    }
}
export default connect(mapStateToProps)(DashboardLayout)
