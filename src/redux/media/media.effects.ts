import cmsApi from '../../apis/cms.api'
import { MediaEffect } from '../../types/media/media.types'
import { IState } from '../../types/redux/general.types'
import { dispatchErrorNotification } from '../../utils/notification.utils'
import { fetchMediaSuccess, mediaError, startMedia } from './media.actions'

export const fetchMediaItems = (path: string = '/'): MediaEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startMedia())

    try {
        const response = await cmsApi.get(`/media?path=${path}`, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(fetchMediaSuccess(response.data))
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(mediaError())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(mediaError())
    }
}
