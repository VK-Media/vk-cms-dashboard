import {
    ICreateCollectionSucceeded,
    IDeleteCollectionSuccess,
    IFetchCollectionsSuccess,
    IFetchCollectionSucceeded,
    ICollection,
    ICollectionEffectError,
    IStartCollectionEffect
} from '../../types/collections.types'

export const fetchCollectionsSuccess = (
    collections: ICollection[],
    count: number,
    append: boolean
): IFetchCollectionsSuccess => ({
    type: 'fetchCollectionsSuccess',
    payload: { collections, count, append }
})

export const fetchCollectionSucceeded = (collection: ICollection): IFetchCollectionSucceeded => ({
    type: 'fetchCollectionSucceeded',
    payload: collection
})

export const createCollectionSucceeded = (): ICreateCollectionSucceeded => ({
    type: 'createCollectionSucceeded'
})

export const startCollectionEffect = (): IStartCollectionEffect => ({
    type: 'startCollectionEffect'
})

export const collectionEffectError = (): ICollectionEffectError => ({
    type: 'collectionEffectError'
})

export const deleteCollectionSuccess = (id: string): IDeleteCollectionSuccess => ({
    type: 'deleteCollectionSuccess',
    payload: id
})
