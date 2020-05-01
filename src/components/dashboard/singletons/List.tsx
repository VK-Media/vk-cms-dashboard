import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingletons } from '../../../redux/singletons/singletons.effects'
import { IState } from '../../../types/redux/general.types'
import List from '../../UI/list/List'

const ListSingletons: React.FC = () => {
    const dispatch = useDispatch()
    const singletons = useSelector((state: IState) => state.singletons.singletons)

    useEffect(() => {
        dispatch(fetchSingletons())
    }, [dispatch])

    return (
        <List
            heading="Singletons"
            newButton={{ enable: true, label: 'Create Singleton' }}
            items={singletons}
            columns={[{ heading: 'Name', fields: ['name'] }]}
            type="singletons"
        />
    )
}

export default ListSingletons
