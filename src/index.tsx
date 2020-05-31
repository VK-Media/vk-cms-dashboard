import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './i18n'
import './index.scss'
import ProviderWrapper from './redux/ProviderWrapper'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <ProviderWrapper>
        <App/>
    </ProviderWrapper>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
