import { addNotification } from '../redux/notifications/notifications.actions'
import { NotificationTypes } from '../types/redux/notifications.types'

export const dispatchErrorNotification = (dispatch: any) => {
    dispatch(addNotification({
        heading: 'Error',
        message: 'Something went wrong, try again later',
        type: NotificationTypes.ERROR
    }))
}
