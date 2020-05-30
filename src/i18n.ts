import { initialize, languages } from 'vk-i18n'
import danish from './translations/da.json'
import english from './translations/en.json'

initialize({
    translations: {
        "en-US": english,
        "da-DK": danish
    },
    fallbackLanguage: languages.ENGLISH
})
