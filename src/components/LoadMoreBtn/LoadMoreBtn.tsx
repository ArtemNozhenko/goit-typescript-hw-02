import css from "./LoadMoreBtn.module.css";

interface ButtonClickProps {
  click: () => void;
}

export default function LoadMoreBtn({
  click,
}: ButtonClickProps) {
  return (
    <button className={css.button} onClick={click}>
      Load More
    </button>
  );
}
