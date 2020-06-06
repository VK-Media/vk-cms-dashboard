import produce from 'immer'
import { ICollection, ICollectionsState, CollectionsAction } from '../../types/collections.types'

export const initialState: ICollectionsState = {
    collections: [],
    loading: false,
    count: 0
}

const reducer = (state = initialState, action: CollectionsAction) => {
    switch (action.type) {
        case 'fetchCollectionsSuccess':
            return produce(state, draft => {
                if (action.payload.append) {
                    draft.collections = [...state.collections, ...action.payload.collections]
                } else {
                    draft.collections = action.payload.collections
                }

                draft.loading = false
                draft.count = action.payload.count
            })
        case 'fetchCollectionSucceeded':
            return produce(state, draft => {
                draft.collectionToUpdate = action.payload
                draft.loading = false
            })
        case 'startCollectionEffect':
            return produce(state, draft => {
                draft.loading = true
            })
        case 'collectionEffectError':
            return produce(state, draft => {
                draft.loading = false
            })
        case 'deleteCollectionSuccess':
            return produce(state, draft => {
                draft.collections = state.collections.filter((collection: ICollection) => {
                    return collection._id !== action.payload
                })
                draft.count = state.count - 1
            })
        default:
            return state
    }
}

export default reducer
