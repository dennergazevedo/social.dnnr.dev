'use client'
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { SliceZone } from '@prismicio/react';
import { components } from "@/slices";

import styles from './styles.module.scss'

const Tabs: React.FC<TabsProps> = ({ feed, experiences, content }: TabsProps) => {
  const router = useRouter()

  const [currentTab, setCurrentTab] = useState<Tab>("feed");

  const tabList: Tab[] = ["feed", "experiências", "conteúdo"]

  const selectTab = useCallback((tab: Tab) => {
    setCurrentTab(tab)
    router?.push(`/#${tab}`)
  }, [router])

  useEffect(() => {
    if (typeof window !== undefined) {
      const hash = decodeURI(window?.location?.hash).replace("#", "")
      if(tabList.includes(hash as Tab)){
        setCurrentTab(hash as Tab)
      }
    }
  }, [])

  return (
    <Fragment>
      <div className={styles.tabsContainer}>
        {tabList.map(tab => (
          <button
            key={tab}
            data-selected-tab={tab === currentTab}
            onClick={() => selectTab(tab)}
            className={styles.tabButton}
          >
            {tab}
          </button>
        ))}
      </div>
      {currentTab === 'feed' && feed &&
        <SliceZone slices={feed} components={components} />
      }
      {currentTab === 'experiências' && experiences &&
        <SliceZone slices={experiences} components={components} />
      }
      {currentTab === 'conteúdo' && content &&
        <section className={styles.tabContent}>
          <div className={styles.contentTitleContainer}>
            <h3 className={styles.contentTitle}>Posts</h3>
            <p className={styles.contentSubtitle}>
              Às vezes escrevo um pouco. Aqui estão meus posts.
            </p>
          </div>
          <SliceZone slices={content} components={components} />
        </section>
      }
    </Fragment>
  )
}

export default Tabs;