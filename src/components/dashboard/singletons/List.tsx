import React from 'react'
import { useTranslation } from 'vk-i18n'
import {
    deleteSingletonSuccess,
    fetchSingletonsSuccess,
    singletonEffectError,
    startSingletonEffect
} from '../../../redux/singletons/singletons.actions'
import List from '../../UI/list/List'

const ListSingletons: React.FC = () => {
    const { t } = useTranslation()

    return (
        <List
            heading={t('Singletons')}
            createItems={{ enable: true, label: t('Create Singleton') }}
            columns={[{ heading: t('Name'), fields: ['name'] }]}
            type="singletons"
            actions={{
                startAction: startSingletonEffect,
                fetchSuccessAction: fetchSingletonsSuccess,
                deleteSuccessAction: deleteSingletonSuccess,
                errorAction: singletonEffectError
            }}
        />
    )
}

export default ListSingletons
