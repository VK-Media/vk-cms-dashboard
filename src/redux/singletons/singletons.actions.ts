import {
    ICreateSingletonSucceeded,
    IDeleteSingletonSuccess,
    IFetchSingletonsSuccess,
    IFetchSingletonSucceeded,
    ISingleton,
    ISingletonEffectError,
    IStartSingletonEffect
} from '../../types/redux/singletons.types'

export const fetchSingletonsSuccess = (
    singletons: ISingleton[],
    count: number,
    append: boolean
): IFetchSingletonsSuccess => ({
    type: 'fetchSingletonsSuccess',
    payload: { singletons, count, append }
})

export const fetchSingletonSucceeded = (singleton: ISingleton): IFetchSingletonSucceeded => ({
    type: 'fetchSingletonSucceeded',
    payload: singleton
})

export const createSingletonSucceeded = (): ICreateSingletonSucceeded => ({
    type: 'createSingletonSucceeded'
})

export const startSingletonEffect = (): IStartSingletonEffect => ({
    type: 'startSingletonEffect'
})

export const singletonEffectError = (): ISingletonEffectError => ({
    type: 'singletonEffectError'
})

export const deleteSingletonSuccess = (id: string): IDeleteSingletonSuccess => ({
    type: 'deleteSingletonSuccess',
    payload: id
})
