import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type StoriesProps = SliceComponentProps<Content.StoriesSlice>;

const Stories = ({ slice }: StoriesProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      
    </section>
  );
};

export default Stories;