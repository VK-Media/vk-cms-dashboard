import Button, { buttonTypes, buttonVariants } from '@bit/vk-media.cms.button'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as CloseIcon } from '../../../icons/times.svg'
import { hideModal } from '../../../redux/modal/modal.actions'
import { IState } from '../../../types/redux/general.types'
import styles from './Modal.module.scss'

const Modal = () => {
    const { t } = useTranslation()
    const modal = useSelector((state: IState) => state.modal)
    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(hideModal())
    }

    const renderModal = () => {
        if (modal.show) {
            const modalClasses = [styles.modal, styles[`size-${modal.modal.size}`]]

            return (
                <div className={styles.backdrop}>
                    <div className={modalClasses.join(' ')}>
                        <div className={styles.header}>
                            <span>{t(modal.modal.heading)}</span><CloseIcon onClick={closeModal}/></div>
                        <div className={styles.body}>{t(modal.modal.body)}</div>
                        <div className={styles.controls}>
                            <Button
                                text={t(modal.modal.cancelButtonText)}
                                variant={buttonVariants.DEFAULT}
                                type={buttonTypes.TEXT}
                                space={{ right: 1 }}
                                onClick={closeModal}
                            />
                            <Button
                                text={t(modal.modal.confirmButtonText)}
                                variant={modal.modal.type}
                                onClick={modal.modal.confirmButtonHandler}
                            />
                        </div>
                    </div>
                </div>
            )
        }

        return null
    }

    return renderModal()
}

export default Modal
