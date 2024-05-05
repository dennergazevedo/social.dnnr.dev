import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.scss";
import { useMemo } from "react";
import { months } from "@/utils/month";
import Link from "next/link";

export type ContentProps = SliceComponentProps<Content.ContentSlice>;

const ContentTab = ({ slice }: ContentProps): JSX.Element => {
  const date = useMemo(() => {
    if (!slice.primary.created_in) return "";
    const createdIn = new Date(slice.primary.created_in);
    return `${months[createdIn.getMonth()]} ${createdIn.getFullYear()}`;
  }, [slice]);

  const link = useMemo(() => {
    return slice.primary.type === "Blog"
      ? `/blog/${slice.primary.slug}`
      : String(slice.primary.slug);
  }, [slice]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.contentContainer}
    >
      <Link
        href={link}
        target={slice.primary.type === "Blog" ? "_self" : "_blank"}
      >
        <PrismicRichText field={slice.primary.title} />
      </Link>
      <div className={styles.contentRef}>
        <span>{slice.primary.locale} -</span>
        <span>{date}</span>
      </div>
    </section>
  );
};

export default ContentTab;
