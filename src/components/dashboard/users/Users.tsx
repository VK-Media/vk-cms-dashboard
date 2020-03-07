import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../../redux/users/users.effects'
import { IState } from '../../../types/redux/general.types'
import { IUser, UsersEffect } from '../../../types/redux/users.types'
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
            const usersJsx = users.map((user: IUser) => {
                return (
                    <div key={user._id} className={styles.user}>
                        <div>{user.firstName} {user.lastName}</div>
                        <div>{user.email}</div>
                        <div className={styles.controls}>Manage</div>
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
                    {usersJsx}
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
                <button className={`${styles.button} ${styles.success}`}>Create User</button>
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
