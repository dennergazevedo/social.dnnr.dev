import { useMemo } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import Image from "next/image";
import { months } from "@/utils/month";
import { BsFillGeoAltFill } from "react-icons/bs";

import styles from './styles.module.scss'

const FeedPostProfile = ({ primary: props }: Content.FeedPostSlice): JSX.Element => {

  const formattedData = useMemo(() => {
    if(!props.createdat) return "";

    const date = new Date(props.createdat)
    return `${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`
  }, [props])

  return (
    <div className={styles.feedPostProfileContainer}>
      <div className={styles.feedPostProfilePhoto}>
        <Image 
          src={String(props.profilephoto.url)} 
          alt={String(props.profilephoto.alt)} 
          width={40} 
          height={40} 
        />
      </div>
      <div className={styles.feedPostProfileAuthorContainer}>
        <div  className={styles.feedPostProfileAuthor}>
          <PrismicRichText field={props.author}/>
          <span className={styles.feedPostCreatedAt}>
            {formattedData}
          </span>
        </div>
        <div className={styles.feedPostLocale}>
          <BsFillGeoAltFill size={12}/>
          <PrismicRichText field={props.locale}/>
        </div>
      </div>
    </div>
  );
};

export default FeedPostProfile;
