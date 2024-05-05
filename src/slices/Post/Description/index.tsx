import styles from './styles.module.scss'
import { Content } from "@prismicio/client";

import { MdVerified } from "react-icons/md";
import { LuTag } from "react-icons/lu";
import { FaRegClock, FaCalendarDay } from "react-icons/fa";
import { Fragment, useMemo } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { months } from '@/utils/month';

const BlogDescription = ({ primary: props, items }: Content.PostSlice): JSX.Element => {
  
  const createdDate = useMemo(() => {
    if(!props.created_in) return ""
    const createdAt = new Date(props.created_in);
    return `${createdAt.getDate()} ${months[createdAt.getMonth()]} ${createdAt.getFullYear()}`
  }, [props])

  if(!props) return <Fragment />

  return (
    <div className={styles.postDescription}>
      <div className={styles.postTitle}>
        <PrismicRichText field={props.title}/>
      </div>
      <span className={styles.postProfile}>
        Denner Azevedo
        <div className={styles.profileVerifyed}>
          <MdVerified size={16} color="#0776B3"/>
        </div>
      </span>
      <div className={styles.postTags}>
        <div>
          <FaCalendarDay size={16} color="#828282"/>
          <span>{createdDate}</span>
        </div>
        <div>
          <FaRegClock size={16} color="#828282"/>
          <span>~ {props?.read_time} min</span>
        </div>
        <div className={styles.postTagsTech}>
          <LuTag size={16} color="#828282"/>
          {items.map((item: any) => (
            <a key={item.tagname} href={item.tag?.url} target={item.tag?.target}>
              {item.tagname}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogDescription;