import React from 'react'
import {
    deleteSingletonSuccess,
    fetchSingletonsSuccess,
    singletonEffectError,
    startSingletonEffect
} from '../../../redux/singletons/singletons.actions'
import List from '../../UI/list/List'

const ListSingletons: React.FC = () => {
    return (
        <List
            heading="Singletons"
            createItems={{ enable: true, label: 'Create Singleton' }}
            columns={[{ heading: 'Name', fields: ['name'] }]}
            type="singletons"
            actions={{
                startAction: startSingletonEffect,
                fetchSuccessAction: fetchSingletonsSuccess,
                deleteSuccessAction: deleteSingletonSuccess,
                errorAction: singletonEffectError
            }}
        />
    )
}

export default ListSingletons
