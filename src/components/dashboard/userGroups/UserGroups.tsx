import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUserGroups } from '../../../redux/userGroups/userGroups.effects'
import { IState } from '../../../types/redux/general.types'
import { IUserGroup, UserGroupsEffect } from '../../../types/redux/userGroups.types'
import styles from './UserGroups.module.scss'

interface IUsersProps {
    userGroups?: IUserGroup[]

    fetchUserGroups(): UserGroupsEffect
}

const UserGroups: React.FC<IUsersProps> = ({ userGroups, fetchUserGroups }) => {
    useEffect(() => {
        fetchUserGroups()
    }, [fetchUserGroups])

    const renderUserGroupList = () => {
        if (userGroups) {
            const userGroupsJsx = userGroups.map((userGroup: IUserGroup) => {
                return (
                    <div key={userGroup._id} className={styles['user-group']}>
                        <div>{userGroup.name}</div>
                        <div className={styles.controls}>Manage</div>
                    </div>
                )
            })

            return (
                <div className={styles['user-groups']}>
                    <div className={styles.headings}>
                        <div>Name</div>
                        <div/>
                    </div>
                    {userGroupsJsx}
                </div>
            )
        }

        return null
    }

    return (
        <>
            <div className={styles.heading}>
                <div>
                    <h1>User Groups</h1>
                    <div>{userGroups?.length} total</div>
                </div>
                <button className={`${styles.button} ${styles.success}`}>Create User Group</button>
            </div>
            {renderUserGroupList()}
        </>
    )
}

const mapStateToProps = (state: IState) => {
    return {
        userGroups: state.userGroups.userGroups
    }
}

export default connect(mapStateToProps, { fetchUserGroups })(UserGroups)
