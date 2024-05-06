import { Fragment } from "react";

import Image from "next/image";
import styles from './styles.module.scss';

interface ImageZoomProps{
  src: string
  alt: string
  isOpen: boolean
  toggle: () => void
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt, isOpen, toggle }: ImageZoomProps) => {

  if(!isOpen) return <Fragment />

  return (
    <section className={styles.zoomContainer} onClick={toggle}>
      <div>
        <Image src={src} alt={alt} fill />
      </div>
    </section>
  )
}

export default ImageZoom;