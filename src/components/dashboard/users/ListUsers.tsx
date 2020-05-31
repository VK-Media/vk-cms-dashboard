import React from 'react'
import { useTranslation } from 'react-i18next'

const ListUsers: React.FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <h1>{t('Users')}</h1>
        </>
    )
}

export default ListUsers
