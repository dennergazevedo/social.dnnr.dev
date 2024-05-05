import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import styles from './styles.module.scss';

import FeedPostProfile from "./Profile";
import Image from "next/image";

export type FeedPostProps = SliceComponentProps<Content.FeedPostSlice>;

const FeedPost = ({ slice }: FeedPostProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.feedPostContainer}
    >
      <FeedPostProfile {...slice}/>
      <div className={styles.feedPostDescription}>
        <PrismicRichText field={slice.primary.text}/>
      </div>
      <div className={styles.feedPostImageList}>
        {slice.items.map(post => (
          <Image 
            key={post.image.id} 
            src={String(post.image.url)}
            alt={String(post.image.alt)}
            width={320}
            height={320}
          />
        ))}
      </div>
    </section>
  );
};

export default FeedPost;
