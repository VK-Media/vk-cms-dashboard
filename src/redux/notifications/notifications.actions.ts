import {
    IAddNotification,
    INotificationInput,
    IRemoveNotification,
    NotificationTypes
} from '../../types/redux/notifications.types'
import { generateUniqueId } from '../../utils/common.utils'

export const addNotification = (notification: INotificationInput): IAddNotification => ({
    type: 'addNotification',
    payload: { id: generateUniqueId(), type: NotificationTypes.DEFAULT, ...notification }
})

export const removeNotification = (notificationId: string): IRemoveNotification => ({
    type: 'removeNotification',
    payload: notificationId
})
