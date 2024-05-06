import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.scss";

import FeedPostProfile from "./Profile";
import FeedPostImage from "./Image";

export type FeedPostProps = SliceComponentProps<Content.FeedPostSlice>;

const FeedPost = ({ slice }: FeedPostProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.feedPostContainer}
    >
      <FeedPostProfile {...slice} />
      <div className={styles.feedPostDescription}>
        <PrismicRichText field={slice.primary.text} />
      </div>
      <div className={styles.feedPostImageList}>
        {slice.items.map((post) => (
          <FeedPostImage
            key={post.image.id}
            src={String(post.image.url)}
            alt={String(post.image.alt)}
            description={slice.primary.text}
          />
        ))}
      </div>
    </section>
  );
};

export default FeedPost;
