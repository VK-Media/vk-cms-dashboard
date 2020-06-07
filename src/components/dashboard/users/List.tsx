import React from 'react'
import { useTranslation } from 'react-i18next'
import {
    deleteUserSuccess,
    fetchUsersSuccess,
    startUserEffect,
    userEffectError
} from '../../../redux/users/users.actions'
import List from '../../UI/list/List'

const ListUsers: React.FC = () => {
    const { t } = useTranslation()

    return (
        <List
            heading={t('Users')}
            createItems={{ enable: true, label: t('Create User') }}
            columns={[{ heading: t('Name'), fields: ['firstName', 'lastName'] }, {
                heading: t('E-mail'),
                fields: ['email']
            }]}
            type="users"
            actions={{
                startAction: startUserEffect,
                fetchSuccessAction: fetchUsersSuccess,
                deleteSuccessAction: deleteUserSuccess,
                errorAction: userEffectError
            }}
        />
    )
}

export default ListUsers
