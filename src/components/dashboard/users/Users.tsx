import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { buttonTypes } from '../../../interfaces/button.interfaces'
import { fetchUsers } from '../../../redux/users/users.effects'
import { IState } from '../../../types/redux/general.types'
import { IUser, UsersEffect } from '../../../types/redux/users.types'
import DefaultButton from '../../UI/buttons/DefaultButton'
import TextButton from '../../UI/buttons/TextButton'
import styles from './Users.module.scss'

interface IUsersProps {
    users?: IUser[]

    fetchUsers(): UsersEffect
}

const Users: React.FC<IUsersProps> = ({ users, fetchUsers }) => {
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    const renderUserList = () => {
        if (users) {
            const listItems = users.map((user: IUser) => {
                return (
                    <div key={user._id} className={styles.user}>
                        <div>{user.firstName} {user.lastName}</div>
                        <div>{user.email}</div>
                        <div className={styles.controls}>
                            <TextButton text="Manage" type={buttonTypes.PRIMARY} href={`/users/${user._id}`}/>
                        </div>
                    </div>
                )
            })

            return (
                <div className={styles.users}>
                    <div className={styles.headings}>
                        <div>Name</div>
                        <div>Email</div>
                        <div/>
                    </div>
                    {listItems}
                </div>
            )
        }

        return null
    }

    return (
        <>
            <div className={styles.heading}>
                <div>
                    <h1>Users</h1>
                    <div>{users?.length} total</div>
                </div>
                <DefaultButton text="Create User" type={buttonTypes.SUCCESS} href="/users/create"/>
            </div>
            {renderUserList()}
        </>
    )
}

const mapStateToProps = (state: IState) => {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps, { fetchUsers })(Users)
