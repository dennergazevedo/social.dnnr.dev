import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeedPost`.
 */
export type FeedPostProps = SliceComponentProps<Content.FeedPostSlice>;

/**
 * Component for "FeedPost" Slices.
 */
const FeedPost = ({ slice }: FeedPostProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for feed_post (variation: {slice.variation}) Slices
    </section>
  );
};

export default FeedPost;
