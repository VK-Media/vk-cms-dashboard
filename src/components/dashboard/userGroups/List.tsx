import React from 'react'
import { useTranslation } from 'react-i18next'
import {
    userGroupEffectError,
    deleteUserGroupSuccess,
    fetchUserGroupsSuccess,
    startUserGroupEffect
} from '../../../redux/userGroups/userGroups.actions'
import List from '../../UI/list/List'

const ListUserGroups: React.FC = () => {
    const { t } = useTranslation()

    return (
        <List
            heading={t('User Groups')}
            createItems={{ enable: true, label: t('Create User Group') }}
            columns={[{ heading: t('Name'), fields: ['name'] }]}
            type="userGroups"
            actions={{
                startAction: startUserGroupEffect,
                fetchSuccessAction: fetchUserGroupsSuccess,
                deleteSuccessAction: deleteUserGroupSuccess,
                errorAction: userGroupEffectError
            }}
        />
    )
}

export default ListUserGroups
