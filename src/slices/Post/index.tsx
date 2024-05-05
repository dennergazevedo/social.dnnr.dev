import styles from './styles.module.scss';

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import BlogDescription from "./Description";

export type PostProps = SliceComponentProps<Content.PostSlice>;

const Post = ({ slice }: PostProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.postContainer}
    >
      <BlogDescription {...slice} />
      <div className={styles.postContent}>
        <PrismicRichText field={slice.primary.content}/>
      </div>
    </section>
  )
};

export default Post;
