import React from 'react'
import { useTranslation } from '../../../localization'

const ListUserGroups: React.FC = () => {
    const { t } = useTranslation()

    return (
        <div>{t('User Groups')}</div>
    )
}

export default ListUserGroups
