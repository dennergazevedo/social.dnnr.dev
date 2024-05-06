'use client'
import { Fragment, useState } from "react";
import { RichTextField } from "@prismicio/client";

import Image from "next/image";
import styles from './styles.module.scss';
import { PrismicRichText } from "@prismicio/react";
import { IoMdClose } from "react-icons/io";

interface ImageZoomProps{
  src: string
  alt: string
  description: RichTextField
}

const FeedPostImage: React.FC<ImageZoomProps> = ({ src, alt, description }: ImageZoomProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(prev => !prev);

  return (
    <Fragment>
      <Image 
        src={src}
        alt={alt}
        width={320}
        height={320}
        onClick={toggle}
      />
      {
        isOpen &&
        <section className={styles.zoomContainer} onClick={toggle}>
          <div className={styles.closeZoom}>
            <IoMdClose size={32}/>
          </div>
          <div>
            <Image src={src} alt={alt} fill />
            <PrismicRichText field={description} />
          </div>
        </section>
      }
    </Fragment>
  )
}

export default FeedPostImage;