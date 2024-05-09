'use client'
import { Fragment, useState } from 'react';
import { IoCheckmarkDoneOutline } from "react-icons/io5";

import styles from './styles.module.scss'
import MessageBlockModal from './modal';

const MessageBlock: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  const toggle = () => setIsOpen(prev => !prev);

  if(sent){
    return(
      <section className={styles.messageBlockContainer}>
        <IoCheckmarkDoneOutline size={16}/>
        <p>Sua mensagem foi enviada com sucesso!</p>
      </section>
    )
  }

  return (
    <Fragment>
      <section className={styles.messageBlockContainer} onClick={toggle}>
        <p>Envie-me uma mensagem...</p>
      </section>
      { isOpen && <MessageBlockModal toggle={toggle} setSent={setSent} /> }
    </Fragment>
  )
}

export default MessageBlock;