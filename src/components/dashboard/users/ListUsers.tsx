import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../../redux/users/users.effects'
import { IState } from '../../../types/redux/general.types'
import List from '../../UI/list/List'

const ListUsers: React.FC = () => {
    const dispatch = useDispatch()
    const users = useSelector((state: IState) => state.users.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <List
            heading="Users"
            newButton={{ enable: true, label: 'Create User' }}
            items={users}
            columns={[{ heading: 'Name', fields: ['firstName', 'lastName'] }, { heading: 'Email', fields: 'email' }]}
            type="users"
        />
    )
}

export default ListUsers
