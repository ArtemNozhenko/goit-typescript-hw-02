import { Formik, Field, Form } from "formik";
import toast from "react-hot-toast";
import { HiSearch } from "react-icons/hi";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <div className={css.container}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === "") {
            toast.error("Fill in the input field!");
          } else {
            onSearch(values.query.trim());
          }
          actions.resetForm();
        }}
      >
        <Form className={css.searchForm}>
          <div className={css.inputWrapper}>
            <Field
              name="query"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              className={css.searchInput}
            />
            <button
              type="submit"
              className={css.searchButton}
            >
              <HiSearch />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
