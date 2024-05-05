import { useMemo } from "react";
import Image from "next/image";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import styles from './styles.module.scss';
import { getTime } from "@/utils/time";

export type ExperiencesProps = SliceComponentProps<Content.ExperiencesSlice>;

const ExperiencesHeader = (slice: Content.ExperiencesSlice): JSX.Element => {

  const time = useMemo(() => {
    if(!slice.primary.starts_in) return ""

    const startsId = new Date(slice.primary.starts_in)
    const endsIn = slice.primary.ends_in ? new Date(slice.primary.ends_in) : new Date()
    return getTime(startsId, endsIn)
  }, [slice])

  return (
    <div className={styles.experiencesEnterpriseContainer}>
      <Image 
        src={String(slice.primary.enterprise_logo.url)} 
        alt={String(slice.primary.enterprise_logo.alt)}
        width={48}
        height={48}
      />
      <div className={styles.experiencesEnterpriseDescription}>
        <div className={styles.experiencesEnterpriseName}>
          <PrismicRichText field={slice.primary.enterprise}/>
          <span>{time}</span>
        </div>
        <div className={styles.experiencesLocale}>
          <PrismicRichText field={slice.primary.locale}/>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesHeader;
