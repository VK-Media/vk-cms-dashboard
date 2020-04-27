import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserGroups } from '../../../redux/userGroups/userGroups.effects'
import { IState } from '../../../types/redux/general.types'
import List from '../../UI/list/List'

const ListUserGroups: React.FC = () => {
    const dispatch = useDispatch()
    const userGroups = useSelector((state: IState) => state.userGroups.userGroups)

    useEffect(() => {
        dispatch(fetchUserGroups())
    }, [dispatch])

    return (
        <List
            heading="Users"
            newButton={{ enable: true, label: 'Create User Group' }}
            items={userGroups}
            columns={[{ heading: 'Name', fields: 'name' }]}
            type="userGroups"
        />
    )
}

export default ListUserGroups
