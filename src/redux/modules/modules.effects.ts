import cmsApi from '../../apis/cms.api'
import { ModulesEffect } from '../../types/modules.types'
import { IState } from '../../types/redux/general.types'
import { dispatchErrorNotification } from '../../utils/notification.utils'
import { fetchModulesSuccess, modulesError, startModules } from './modules.actions'

export const fetchModulesItems = (path: string = '/'): ModulesEffect => async (dispatch, getState) => {
    const currentState: IState = getState()

    dispatch(startModules())

    try {
        const response = await cmsApi.get(`/modules?path=${path}`, {
            headers: { Authorization: `Bearer ${currentState.authentication.jwt}` }
        })

        if (response.status >= 200 && response.status < 300) {
            dispatch(fetchModulesSuccess(response.data))
        } else {
            dispatchErrorNotification(dispatch)
            dispatch(modulesError())
        }
    } catch (error) {
        dispatchErrorNotification(dispatch)
        dispatch(modulesError())
    }
}
