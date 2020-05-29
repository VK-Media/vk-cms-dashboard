import { Action } from "redux";

export enum languages {
    ENGLISH = 'en',
    DANISH = 'da'
}

export interface ILanguages {
    en: ITranslation
    da: ITranslation
}

export interface ITranslation {
    [key: string]: string
}

export interface ILanguageState {
    language: languages
}

export interface ISetLanguage extends Action {
    type: 'setLanguage',
    payload: languages
}

export type LanguageAction = ISetLanguage
