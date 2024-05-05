import { Fragment, useCallback } from "react";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.scss";
import { months } from "@/utils/month";
import { IoDiamond } from "react-icons/io5";

export type ExperiencesProps = SliceComponentProps<Content.ExperiencesSlice>;

const ExperiencesBody = (slice: Content.ExperiencesSlice): JSX.Element => {

  const getRoleTime = useCallback((dateInit: any, dateEnd: any) => {
    if (!dateInit) return "";
    const startsId = new Date(dateInit);
    const endsIn = dateEnd ? new Date(dateEnd) : "";
    return `${months[startsId.getMonth()]} de ${startsId.getFullYear()} - ${endsIn ? `${months[endsIn.getMonth()]} de ${endsIn.getFullYear()}` : "atual"}`;
  }, []);

  if (!slice.items) return <Fragment />;

  return (
    <div className={styles.enterpriceRolesContainer}>
      {slice.items.map((item) => (
        <div key={String(item.role)} className={styles.enterpriceRole}>
          <div className={styles.enterpriceRoleName}>
            <PrismicRichText field={item.role} />
          </div>
          <div className={styles.enterpriceDuration}>
            {getRoleTime(item.starts_in, item.ends_in)}
          </div>
          <div className={styles.enterpriceSkills}>
            <IoDiamond size={14}/>
            <PrismicRichText field={item.skills} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperiencesBody;
