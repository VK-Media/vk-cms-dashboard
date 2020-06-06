import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { ReactComponent as SuccessIcon } from '../../../../icons/check.svg'
import { ReactComponent as ErrorIcon } from '../../../../icons/exclamation-circle.svg'
import { ReactComponent as WarningIcon } from '../../../../icons/exclamation-triangle.svg'
import { ReactComponent as InfoIcon } from '../../../../icons/info-circle.svg'
import { ReactComponent as CloseIcon } from '../../../../icons/times.svg'
import { removeNotification } from '../../../../redux/notifications/notifications.actions'
import { INotification, NotificationTypes } from '../../../../types/redux/notifications.types'
import styles from './Notification.module.scss'

const Notification: React.FC<INotification> = ({ id, heading, message, type }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const typeClass = styles[`type-${type}`]

    const getIcon = () => {
        switch (type) {
            case NotificationTypes.WARNING:
                return <WarningIcon/>
            case NotificationTypes.SUCCESS:
                return <SuccessIcon/>
            case NotificationTypes.ERROR:
                return <ErrorIcon/>
            default:
                return <InfoIcon/>
        }
    }

    return (
        <div className={`${styles.notification} ${typeClass}`}>
            <div className={styles.close} onClick={() => dispatch(removeNotification(id))}><CloseIcon/></div>
            <div className={styles.icon}>{getIcon()}</div>
            <div className={styles.content}>
                <div className={styles.heading}>{t(heading)}</div>
                <div className={styles.message}>{t(message)}</div>
            </div>
        </div>
    )
}

export default Notification
