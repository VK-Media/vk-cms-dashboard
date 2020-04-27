import React from 'react'
import { buttonTypes } from '../../../interfaces/button.interfaces'
import DefaultButton from '../buttons/DefaultButton'
import TextButton from '../buttons/TextButton'
import styles from './List.module.scss'

interface IColumn {
    heading: string
    fields: string | string[]
}

interface INewButton {
    enable: boolean
    label?: string
}

interface IListProps {
    heading?: string
    items?: any[]
    newButton: INewButton
    columns: IColumn[]
    type: string
}

const List: React.FC<IListProps> = ({ heading, items, newButton, columns, type }) => {
    const typeUrl = type.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)

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
        return items?.map(item => {
            return (
                <div key={item._id} className={styles.item}>
                    {renderItemValues(item)}
                    <div className={styles.controls}>
                        <TextButton text="Manage" type={buttonTypes.PRIMARY} href={`/${typeUrl}/${item._id}`}/>
                    </div>
                </div>
            )
        })
    }

    const renderNewButton = () => {
        if (newButton.enable) {
            return (
                <DefaultButton
                    text={newButton.label ?? 'Create New'}
                    type={buttonTypes.SUCCESS}
                    href={`/${typeUrl}/create`}
                />
            )
        }

        return null
    }

    return (
        <div className={styles.list}>
            <div className={styles.heading}>
                <div>
                    <h1>{heading ?? 'List'}</h1>
                    <div>{items?.length ?? 0} total</div>
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
        </div>
    )
}

export default List
