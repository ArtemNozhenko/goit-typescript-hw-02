import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Images } from "../type";
import React from "react";

interface ImageGalleryProps {
  items: Images[];
  onImageClick: (image: string) => void;
}

const imageGallery: React.FC<ImageGalleryProps> = ({
  items,
  onImageClick,
}) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {items.map((item) => (
          <li className={css.item} key={item.id}>
            <ImageCard item={item} onClick={onImageClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default imageGallery;
