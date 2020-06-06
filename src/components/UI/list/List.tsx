import Button, { buttonFontSizes, buttonTypes, buttonVariants } from '@bit/vk-media.cms.button'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, fetchListItems } from '../../../redux/list/list.effects'
import { showModal } from '../../../redux/modal/modal.actions'
import { fetchSingletonsSuccess } from '../../../redux/singletons/singletons.actions'
import { NotificationTypes } from '../../../types/redux/notifications.types'
import styles from './List.module.scss'

interface IColumn {
    heading: string
    fields: string | string[]
}

interface IButton {
    enable: boolean
    label?: string
}

interface IListProps {
    heading?: string
    createItems?: IButton
    editItems?: IButton
    deleteItems?: IButton
    columns: IColumn[]
    type: string
    limit?: number
    actions: {
        startAction: CallableFunction
        fetchSuccessAction: CallableFunction
        deleteSuccessAction: CallableFunction
        errorAction: CallableFunction
    }
}

const List: React.FC<IListProps> = ({
        heading,
        createItems = { enable: true },
        editItems = { enable: true },
        deleteItems = { enable: true },
        columns,
        type,
        limit = 9,
        actions: { startAction, fetchSuccessAction, deleteSuccessAction, errorAction }
    }
) => {
    const dispatch = useDispatch()
    const [offset, setOffset] = useState(limit)
    const items = useSelector((state: any) => state[type][type])
    const count = useSelector((state: any) => state[type]['count'])
    const { t } = useTranslation()

    useEffect(() => {
        dispatch(fetchListItems({
            type,
            startAction,
            successAction: fetchSuccessAction,
            errorAction,
            limit,
            offset: 0,
            append: false
        }))
    }, [dispatch, type, limit, startAction, fetchSuccessAction, errorAction])

    const typeUrl = type.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)

    const clickShowMore = () => {
        dispatch(fetchListItems({
            type,
            startAction,
            successAction: fetchSuccessAction,
            errorAction,
            limit,
            offset,
            append: true
        }))
        setOffset(offset + limit)
    }

    const renderListHeadings = () => {
        return columns.map((column: IColumn) => {
            return <div key={column.heading}>{column.heading}</div>
        })
    }

    const getColumnCount = () => {
        return columns.length + 1
    }

    const renderItemValues = (item: any) => {
        return columns.map((column: IColumn) => {
            let value

            if (Array.isArray(column.fields)) {
                const values = []

                for (const fieldName in column.fields) {
                    if (column.fields[fieldName]) {
                        values.push(item[column.fields[fieldName]])
                    }
                }

                value = values.join(' ')
            } else {
                value = item[column.fields]
            }

            return <div key={column.heading}>{value}</div>
        })
    }

    const renderItems = () => {
        return items.map((item: any) => {
            return (
                <div key={item._id} className={styles.item}>
                    {renderItemValues(item)}
                    <div className={styles.controls}>
                        {renderEditButton(item._id)}
                        {renderDeleteButton(item._id)}
                    </div>
                </div>
            )
        })
    }

    const renderNewButton = () => {
        if (createItems && createItems.enable) {
            return (
                <Button
                    text={createItems.label ?? t('Create New')}
                    variant={buttonVariants.SUCCESS}
                    href={t(`/${typeUrl}/create`)}
                />
            )
        }

        return null
    }

    const renderEditButton = (id: string) => {
        if (editItems && editItems.enable) {
            let space = {}
            const label = editItems.label ?? t('Edit')

            if (deleteItems && deleteItems.enable) {
                space = { right: 1 }
            }

            if (label) {
                return (
                    <Button
                        text={label}
                        space={space}
                        type={buttonTypes.TEXT}
                        fontSize={buttonFontSizes.MEDIUM}
                        variant={buttonVariants.PRIMARY}
                        href={t(`/${typeUrl}/:id`, { id })}
                    />
                )
            }
        }

        return null
    }

    const deleteButtonClicked = (id: string) => {
        const updateList = count > items.length

        dispatch(showModal({
            confirmButtonHandler: () => dispatch(deleteItem({
                id,
                type,
                startAction,
                errorAction,
                successAction: deleteSuccessAction,
                successNofitifcation: {
                    heading: t('Success'),
                    message: t('The item has been deleted'),
                    type: NotificationTypes.SUCCESS
                },
                fetchSuccessAction: fetchSingletonsSuccess,
                offset,
                updateList
            })),
            type: buttonVariants.ERROR,
            confirmButtonText: 'Delete',
            heading: 'Delete record',
            body: 'Are you sure you want to delete this record?'
        }))
    }

    const renderDeleteButton = (id: string) => {
        if (deleteItems && deleteItems.enable) {
            const label = deleteItems.label ?? t('Delete')

            if (label) {
                return (
                    <Button
                        text={label}
                        type={buttonTypes.TEXT}
                        variant={buttonVariants.ERROR}
                        fontSize={buttonFontSizes.MEDIUM}
                        onClick={() => deleteButtonClicked(id)}
                    />
                )
            }
        }

        return null
    }

    const renderShowMoreButton = () => {
        if (count > items.length) {
            return (
                <div className={styles['show-more']}>
                    <Button
                        text={t('Show more')} type={buttonTypes.TEXT} variant={buttonVariants.PRIMARY}
                        onClick={clickShowMore}
                    />
                </div>
            )
        }

        return null
    }

    return (
        <div className={styles.list}>
            <div className={styles.heading}>
                <div>
                    <h1>{heading ?? t('List')}</h1>
                    <div>{count} {t('total')}</div>
                </div>
                {renderNewButton()}
            </div>

            <div className={`${styles.items} ${styles['cols-' + getColumnCount()]}`}>
                <div className={styles.headings}>
                    {renderListHeadings()}
                    <div/>
                </div>

                {renderItems()}
            </div>

            {renderShowMoreButton()}
        </div>
    )
}

export default List
