import cmsApi from '../../apis/cms.api'
import { IDeleteListItemArguments, IFetchListArguments, ListEffect } from '../../types/list/list.types'
import { IState } from '../../types/redux/general.types'
import { dispatchErrorNotification } from '../../utils/notification.utils'
import { addNotification } from '../notifications/notifications.actions'

export const fetchListItems = (options: IFetchListArguments): ListEffect => async (
    dispatch,
    getState
) => {
    const currentState: IState = getState()
    const { type, limit, offset, append, startAction, successAction, errorAction } = options

    dispatch(startAction())

    try {
        const response = await cmsApi.get(`/${type}?limit=${limit}&offset=${offset}`, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(successAction(response.data.objects, response.data.count, append))
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(errorAction())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(errorAction())
    }
}

export const deleteItem = (options: IDeleteListItemArguments): ListEffect => async (dispatch, getState) => {
    const currentState: IState = getState()
    const { type, id, startAction, errorAction, successAction, successNofitifcation, offset, fetchSuccessAction, updateList } = options

    dispatch(startAction())

    try {
        const response = await cmsApi.delete(`/${type}/${id}`, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(successAction(response.data.id))
            dispatch(addNotification(successNofitifcation))

            if (updateList) {
                dispatch(fetchListItems({
                    limit: 1,
                    startAction,
                    successAction: fetchSuccessAction,
                    type,
                    offset: offset - 1,
                    errorAction,
                    append: true
                }))
            }
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(errorAction())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(errorAction())
    }
}
