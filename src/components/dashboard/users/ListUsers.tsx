import React from 'react'
import { useTranslation } from 'vk-i18n'

const ListUsers: React.FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <h1>{t('Users')}</h1>
        </>
    )
}

export default ListUsers
