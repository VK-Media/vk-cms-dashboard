import { useSelector } from 'react-redux'
import { ILanguages, ITranslation } from '../types/language/language.types'
import { IState } from '../types/redux/general.types'
import danish from './translations/da.json'
import english from './translations/en.json'

export const useTranslation = () => {
    const language = useSelector((state: IState) => state.language.language)
    const languagesFiles: ILanguages = {
        en: english,
        da: danish
    }
    const translations: ITranslation = languagesFiles[language]

    return {
        t: (key: string): string => {
            if (translations.hasOwnProperty(key)) {
                return translations[key]
            }

            if (process.env.NODE_ENV === 'development') {
                console.warn(`No translation key: "${key}", in language: "${language}"`)
            }

            return key
        }
    }
}
