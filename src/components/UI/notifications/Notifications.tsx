import React from 'react'
import { useSelector } from 'react-redux'
import { IState } from '../../../types/redux/general.types'
import { INotification } from '../../../types/redux/notifications.types'
import Notification from './notification/Notification'
import styles from './Notifications.module.scss'

const Notifications: React.FC = () => {
    const notifications = useSelector((state: IState) => state.notifications.notifications)

    const renderNotifications = () => {
        return notifications.map((notification: INotification) => {
            return <Notification key={notification.id} {...notification}/>
        })
    }

    return (
        <div className={styles.notifications}>{renderNotifications()}</div>
    )
}

export default Notifications
