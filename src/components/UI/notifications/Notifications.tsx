import React from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import { IState } from '../../../types/redux/general.types'
import { INotification } from '../../../types/redux/notifications.types'
import Notification from './notification/Notification'
import styles from './Notifications.module.scss'
import notificationStyles from './notification/Notification.module.scss'

const Notifications: React.FC = () => {
    const notifications = useSelector((state: IState) => state.notifications.notifications)

    const renderNotifications = () => {
        return notifications.map((notification: INotification) => {
            return (
                <CSSTransition key={notification.id} classNames={{
                    enter: notificationStyles.enter,
                    enterActive: notificationStyles.enterActive,
                    exit: notificationStyles.exit,
                    exitActive: notificationStyles.exitActive
                }} timeout={250}>
                    <Notification {...notification}/>
                </CSSTransition>)
        })
    }

    return (
        <div className={styles.notifications}>
            <TransitionGroup component={null}>
                {renderNotifications()}
            </TransitionGroup>
        </div>
    )
}

export default Notifications
