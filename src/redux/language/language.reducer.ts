import produce from 'immer'
import { ILanguageState, LanguageAction, languages } from '../../types/language/language.types'

export const initialState: ILanguageState = {
    language: languages.ENGLISH
}

const reducer = (state = initialState, action: LanguageAction) => {
    switch (action.type) {
        case 'setLanguage':
            return produce(state, draft => {
                draft.language = action.payload
            })
        default:
            return state
    }
}

export default reducer
