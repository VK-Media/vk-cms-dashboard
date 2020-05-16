export enum buttonVariants {
    DEFAULT = 'default',
    SUCCESS = 'success',
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum buttonTypes {
    DEFAULT = 'default',
    TEXT = 'text'
}

export enum buttonFontSizes {
    SMALL = 'sm',
    MEDIUM = 'md',
    LARGE = 'lg'
}

export type Space = 1 | 2 | 3

export interface ISpace {
    top?: Space
    right?: Space
    bottom?: Space
    left?: Space
}

export interface IButtonProps {
    text: string
    type?: buttonTypes
    variant?: buttonVariants
    href?: string
    onClick?: any
    space?: ISpace
    fontSize?: buttonFontSizes
}
