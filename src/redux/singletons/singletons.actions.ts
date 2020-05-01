import {
    ICreateSingletonSucceeded,
    IFetchSingletonsSucceeded,
    IFetchSingletonSucceeded,
    ISingleton
} from '../../types/redux/singletons.types'

export const fetchSingletonsSucceeded = (singletons: ISingleton[]): IFetchSingletonsSucceeded => ({
    type: 'fetchSingletonsSucceeded',
    payload: singletons
})

export const fetchSingletonSucceeded = (singleton: ISingleton): IFetchSingletonSucceeded => ({
    type: 'fetchSingletonSucceeded',
    payload: singleton
})

export const createSingletonSucceeded = (): ICreateSingletonSucceeded => ({
    type: 'createSingletonSucceeded'
})
