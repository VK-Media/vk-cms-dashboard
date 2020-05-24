import React from 'react'
import { useTranslation } from '../../../localization'

const ListUserGroups: React.FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <h1>{t('User Groups')}</h1>
        </>
    )
}

export default ListUserGroups
