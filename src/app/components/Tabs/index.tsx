'use client'
import { Fragment, useState } from 'react';

import { SliceZone } from '@prismicio/react';
import { components } from "@/slices";

import styles from './styles.module.scss'

const Tabs: React.FC<TabsProps> = ({ feed, experiences, content }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState<Tab>("feed");

  const tabList: Tab[] = ["feed", "experiences", "content"]

  return (
    <Fragment>
      <div className={styles.tabsContainer}>
        {tabList.map(tab => (
          <button 
            key={tab} 
            data-selected-tab={tab === currentTab} 
            onClick={() => setCurrentTab(tab)}
            className={styles.tabButton}
          >
            {tab}
          </button>
        ))}
      </div>
      { currentTab === 'feed' && feed &&
        <SliceZone slices={feed} components={components} /> 
      }
      { currentTab === 'experiences' && experiences &&
        <SliceZone slices={experiences} components={components} /> 
      }
      { currentTab === 'content' && content &&
        <section className={styles.tabContent}>
          <div className={styles.contentTitleContainer}>
            <h3 className={styles.contentTitle}>Posts</h3>
            <p className={styles.contentSubtitle}>
              Às vezes eu escreve um pouco, está aqui os meus posts.
            </p>
          </div>
          <SliceZone slices={content} components={components} /> 
        </section>
      }
    </Fragment>
  )
}

export default Tabs;