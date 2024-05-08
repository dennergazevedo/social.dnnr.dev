'use client'
import { Fragment, useState } from 'react';
import styles from './styles.module.scss'
import MessageBlockModal from './modal';

const MessageBlock: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(prev => !prev);

  return (
    <Fragment>
      <section className={styles.messageBlockContainer} onClick={toggle}>
        <p>Envie-me uma mensagem...</p>
      </section>
      { isOpen && <MessageBlockModal toggle={toggle}/> }
    </Fragment>
  )
}

export default MessageBlock;