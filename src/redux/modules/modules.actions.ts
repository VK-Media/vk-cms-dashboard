import { IFetchModulesSuccess, IModule, IModulesError, IStartModules } from '../../types/modules.types'

export const startModules = (): IStartModules => ({
    type: 'startModules'
})

export const fetchModulesSuccess = (modules: IModule[]): IFetchModulesSuccess => ({
    type: 'fetchModulesSuccess',
    payload: modules
})

export const modulesError = (): IModulesError => ({
    type: 'modulesError'
})
