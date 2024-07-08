import React from "react";
import { Images } from "../type";
import css from "./ImageCard.module.css";

interface ItemGalleryProps {
  item: Images;
  onClick: (image: string) => void;
}

const ImageCard: React.FC<ItemGalleryProps> = ({
  item,
  onClick,
}) => {
  const handleClick = () => {
    onClick(item.urls.regular);
  };

  return (
    <div className={css.item} onClick={handleClick}>
      <img
        className={css.image}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
};

export default ImageCard;
