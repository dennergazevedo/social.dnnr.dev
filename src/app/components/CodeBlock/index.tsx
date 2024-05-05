import Link from 'next/link';
import { codeTip } from './constants';
import styles from './styles.module.scss'

const CodeBlock: React.FC = () => {
  return (
    <section className={styles.codeBlockContainer}>
      <header className={styles.codeBlockHeader}>
        <div className={styles.codeBlockControls}>
          <div className={styles.codeBlockBullet} style={{ background: "#ee5544" }}/>
          <div className={styles.codeBlockBullet} style={{ background: "#eeda44" }} />
          <div className={styles.codeBlockBullet} style={{ background: "#44ee4d" }} />
        </div>
        <Link href="/" className={styles.codeBlockHeaderName}>
          social.dnnr.dev
        </Link>
      </header>
      <div className={styles.codeBlockBody}>
        {
          codeTip.map((code: string, index: number) => (
            <div className={styles.codeBlockLine} key={code + index}>
              <span data-line-number="true">{index + 1}</span>
              <code dangerouslySetInnerHTML={{__html: code}} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default CodeBlock;