import React from 'react'
import { useTranslation } from 'vk-i18n'

const Home = () => {
    const { t } = useTranslation()

    return (
        <>
            <h1>{t('Dashboard')}</h1>
        </>
    )
}

export default Home
