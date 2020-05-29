import { ISetLanguage, languages } from '../../types/language/language.types'

export const setLanguage = (language: languages): ISetLanguage => ({
    type: 'setLanguage',
    payload: language
})
