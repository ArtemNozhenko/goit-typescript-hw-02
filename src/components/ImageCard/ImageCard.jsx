import css from "./ImageCard.module.css";

export default function ImageCard({ item, onClick }) {
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
}
