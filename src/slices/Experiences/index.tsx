import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import styles from './styles.module.scss';
import ExperiencesHeader from "./Header";
import ExperiencesBody from "./Body";

export type ExperiencesProps = SliceComponentProps<Content.ExperiencesSlice>;

const Experiences = ({ slice }: ExperiencesProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.experiencesContainer}
    >
      <ExperiencesHeader {...slice} />
      <ExperiencesBody {...slice} />
    </section>
  );
};

export default Experiences;
