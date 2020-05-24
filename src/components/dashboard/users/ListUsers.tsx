import React from 'react'
import { useTranslation } from '../../../localization'

const ListUsers: React.FC = () => {
    const { t } = useTranslation()
    
    return (
        <div>{t('Users')}</div>
    )
}

export default ListUsers
