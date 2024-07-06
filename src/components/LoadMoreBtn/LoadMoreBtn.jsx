import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ click }) {
  return (
    <button className={css.button} onClick={click}>
      Load More
    </button>
  );
}
