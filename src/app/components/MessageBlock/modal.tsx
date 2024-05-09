'use client'
import { Dispatch, SetStateAction, useState } from 'react';
import * as emailjs from 'emailjs-com';

import styles from './styles.module.scss'
import { AiOutlineLoading } from "react-icons/ai";

interface ModalBlockProps{
  toggle: () => void
  setSent: Dispatch<SetStateAction<boolean>>
}

interface MessageBlockForm{
  message: string
  user: string
  status: boolean
}

const MessageBlockModal: React.FC<ModalBlockProps> = ({ toggle, setSent }: ModalBlockProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  async function sendMessage(event: any){
    event.preventDefault();
    try{
      setLoading(true)
      await emailjs.sendForm(
        String(process.env.NEXT_PUBLIC_MAIL_SERVICE_ID), 
        String(process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID), 
        event.target,
        String(process.env.NEXT_PUBLIC_MAIL_USER_ID)
      )
      setSent(true)
      toggle()
    }catch(err){
      console.log("[!] Erro ao enviar mensagem.", err);
    }
  }

  return (
    <section className={styles.messageBlockModalContainer} onClick={toggle}>
      <form 
        className={styles.messageBlockModalBody} 
        onClick={e => e.stopPropagation()}
        onSubmit={sendMessage}
      >
        <div className={styles.messageBlockModalTitle}>
          Criar mensagem
        </div>
        <input
          name="user"
          placeholder='Identifique-se'
        />
        <textarea 
          name="message"
          placeholder='Escreva aqui a sua mensagem...'
        />
        <button type="submit" data-custom-message-loading="true">
          {loading ? 
            <AiOutlineLoading size={16}/>
            : "Enviar"
          }
        </button>
      </form>
    </section>
  )
}

export default MessageBlockModal;