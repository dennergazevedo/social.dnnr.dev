'use client'
import { useState } from 'react';
import styles from './styles.module.scss'

interface ModalBlockProps{
  toggle: () => void
}

const MessageBlockModal: React.FC<ModalBlockProps> = ({toggle}: ModalBlockProps) => {
  const [message, setMessage] = useState<string>('');

  return (
    <section className={styles.messageBlockModalContainer} onClick={toggle}>
      <div className={styles.messageBlockModalBody} onClick={e => e.stopPropagation()}>
        <textarea 
          placeholder='Envie-me uma mensagem...'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button>Enviar</button>
      </div>
    </section>
  )
}

export default MessageBlockModal;