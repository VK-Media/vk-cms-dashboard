import produce from 'immer'
import { INotification, INotificationsState, NotificationsAction } from '../../types/redux/notifications.types'

export const initialState: INotificationsState = {
    notifications: []
}

const reducer = (state = initialState, action: NotificationsAction) => {
    switch (action.type) {
        case 'addNotification':
            return produce(state, draft => {
                draft.notifications = [action.payload, ...state.notifications]
            })
        case 'removeNotification':
            return produce(state, draft => {
                draft.notifications = state.notifications.filter((notification: INotification) => {
                    return notification.id !== action.payload;
                });
            })
        default:
            return state
    }
}

export default reducer
