import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function imageGallery({
  items,
  onImageClick,
}) {
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
}
