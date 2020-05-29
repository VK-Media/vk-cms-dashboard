import { initialize } from 'vk-i18n'
import { languages } from 'vk-i18n/lib/types/i18n.types'
import danish from './translations/da.json'
import english from './translations/en.json'

initialize({
    translations: {
        "en-US": english,
        "da-DK": danish
    },
    fallbackLanguage: languages.ENGLISH
})
