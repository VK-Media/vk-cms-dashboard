import React from 'react'
import { useTranslation } from '../../../localization'

const ListUsers: React.FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <h1>{t('Users')}</h1>
        </>
    )
}

export default ListUsers
