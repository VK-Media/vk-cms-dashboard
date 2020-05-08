import { IFetchMediaSuccess, IMedia, IMediaError, IStartMedia } from '../../types/media/media.types'

export const startMedia = (): IStartMedia => ({
    type: 'startMedia'
})

export const fetchMediaSuccess = (media: IMedia[]): IFetchMediaSuccess => ({
    type: 'fetchMediaSuccess',
    payload: media
})

export const mediaError = (): IMediaError => ({
    type: 'mediaError'
})
