import React from 'react'
import { useTranslation } from 'react-i18next'
import {
    collectionEffectError,
    deleteCollectionSuccess,
    fetchCollectionsSuccess,
    startCollectionEffect
} from '../../../redux/collections/collections.actions'
import List from '../../UI/list/List'

const ListCollections: React.FC = () => {
    const { t } = useTranslation()

    return (
        <List
            heading={t('Collections')}
            createItems={{ enable: true, label: t('Create Collection') }}
            columns={[{ heading: t('Name'), fields: ['name'] }]}
            type="collections"
            actions={{
                startAction: startCollectionEffect,
                fetchSuccessAction: fetchCollectionsSuccess,
                deleteSuccessAction: deleteCollectionSuccess,
                errorAction: collectionEffectError
            }}
        />
    )
}

export default ListCollections
