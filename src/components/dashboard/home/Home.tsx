import React from 'react'
import { useTranslation } from '../../../localization'

const Home = () => {
    const { t } = useTranslation()

    return (
        <>
            <h1>{t('Dashboard')}</h1>
        </>
    )
}

export default Home
