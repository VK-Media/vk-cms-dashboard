import React from 'react'
import styles from './Widget.module.scss'

interface IWidgetHeadingProps {
    text: string
}

interface IWidgetSubComponents {
    Heading: React.FC<IWidgetHeadingProps>
}

const Widget: React.FC & IWidgetSubComponents = ({ children }) => {
    return <div className={styles.widget}>{children}</div>
}

Widget.Heading = ({ text }) => {
    return (
        <div className={styles.heading}>{text}</div>
    )
}

export default Widget
