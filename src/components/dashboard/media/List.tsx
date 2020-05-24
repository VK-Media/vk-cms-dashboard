import React, { useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, RouteComponentProps } from 'react-router-dom'
import { ReactComponent as DefaultFileIcon } from '../../../icons/file-alt.svg'
import { ReactComponent as ZipFileIcon } from '../../../icons/file-archive.svg'
import { ReactComponent as AudioFileIcon } from '../../../icons/file-audio.svg'
import { ReactComponent as CsvFileIcon } from '../../../icons/file-csv.svg'
import { ReactComponent as ExcelFileIcon } from '../../../icons/file-excel.svg'
import { ReactComponent as ImageFileIcon } from '../../../icons/file-image.svg'
import { ReactComponent as PdfFileIcon } from '../../../icons/file-pdf.svg'
import { ReactComponent as PowerpointFileIcon } from '../../../icons/file-powerpoint.svg'
import { ReactComponent as VideoFileIcon } from '../../../icons/file-video.svg'
import { ReactComponent as WordFileIcon } from '../../../icons/file-word.svg'
import { ReactComponent as FolderIcon } from '../../../icons/folder-open.svg'
import { useTranslation } from '../../../localization'
import { fetchMediaItems } from '../../../redux/media/media.effects'
import { IMedia } from '../../../types/media/media.types'
import { IState } from '../../../types/redux/general.types'
import styles from './Media.module.scss'

const List: React.FC<RouteComponentProps> = ({ location }) => {
    const dispatch = useDispatch()
    const media = useSelector((state: IState) => state.media.media)
    const { t } = useTranslation()
    const pathname = location.pathname !== '/media' ? location.pathname.replace('/media/', '') : ''

    useEffect(() => {
        dispatch(fetchMediaItems(pathname))
    }, [dispatch, pathname])

    const fileTypeIcons: any = {
        mp3: <AudioFileIcon/>,
        wma: <AudioFileIcon/>,
        zip: <ZipFileIcon/>,
        csv: <CsvFileIcon/>,
        gif: <ImageFileIcon/>,
        ico: <ImageFileIcon/>,
        jpeg: <ImageFileIcon/>,
        jpg: <ImageFileIcon/>,
        png: <ImageFileIcon/>,
        svg: <ImageFileIcon/>,
        ppt: <PowerpointFileIcon/>,
        pptx: <PowerpointFileIcon/>,
        xls: <ExcelFileIcon/>,
        xlsm: <ExcelFileIcon/>,
        xlsx: <ExcelFileIcon/>,
        m4v: <VideoFileIcon/>,
        mov: <VideoFileIcon/>,
        mp4: <VideoFileIcon/>,
        doc: <WordFileIcon/>,
        docx: <WordFileIcon/>,
        pdf: <PdfFileIcon/>
    }

    const getFolders = (): IMedia[] => {
        return media.filter(item => item.directory)
    }

    const getFiles = (): IMedia[] => {
        return media.filter(item => !item.directory)
    }

    const getSortedMedia = (values: IMedia[]): IMedia[] => {
        values.sort(function(a, b) {
            const keyA = a.name.toLowerCase()
            const keyB = b.name.toLowerCase()
            if (keyA < keyB) return -1
            if (keyA > keyB) return 1
            return 0
        })

        return values
    }

    const rightClickMedia = (event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, item: IMedia) => {
        event.preventDefault()

        console.log(item)
    }

    const renderMedia = (values: IMedia[]) => {
        if (values.length) {
            values = getSortedMedia(values)

            return values.map((item: IMedia) => {
                if (item.directory) {
                    const icon = <FolderIcon/>
                    const linkParts = [t('/media'), pathname, item.name].filter(el => !!el)

                    return (
                        <NavLink
                            onContextMenu={(event) => rightClickMedia(event, item)} key={item.name}
                            className={styles.media} to={linkParts.join('/')}
                        >
                            <span>{item.name}</span>
                            {icon}
                        </NavLink>
                    )
                } else if (item.extension) {
                    let icon = <DefaultFileIcon/>

                    if (item.extension in fileTypeIcons) {
                        icon = fileTypeIcons[item.extension]
                    }

                    return <div
                        onContextMenu={(event) => rightClickMedia(event, item)} key={item.name}
                        className={styles.media}
                    ><span>{item.name}</span>{icon}</div>
                }

                return null
            })
        }

        return null
    }

    const renderFolders = () => {
        const folders = renderMedia(getFolders())

        if (folders?.length) {
            return <div className={`${styles['media-container']} ${styles.directories}`}>{folders}</div>
        }

        return null
    }

    const renderFiles = () => {
        const files = renderMedia(getFiles())

        if (files?.length) {
            return <div className={styles['media-container']}>{files}</div>
        }

        return <Alert variant="info">{t('There are currently no files in this folder...')}</Alert>
    }

    const renderBreadCrumb = () => {
        const links: any = []
        const pathParts = location.pathname.split('/').filter(part => part)

        for (let i = 0; i < pathParts.length; i++) {
            const name = i === 0 ? t('Home') : pathParts[i]
            links.push({ name, path: `/${pathParts.slice(0, i + 1).join('/')}` })
        }

        const renderItems = () => {
            return links.map((item: any) => {
                return (
                    <li key={item.path} className="breadcrumb-item">
                        <NavLink to={item.path} exact={true}>{item.name}</NavLink>
                    </li>
                )
            })
        }

        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {renderItems()}
                </ol>
            </nav>
        )
    }

    return (
        <>
            <h1>{t('Media')}</h1>

            {renderBreadCrumb()}
            {renderFolders()}
            {renderFiles()}
        </>
    )
}

export default List
