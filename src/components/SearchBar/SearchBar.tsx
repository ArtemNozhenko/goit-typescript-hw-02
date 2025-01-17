import { Formik, Field, Form, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import { HiSearch } from "react-icons/hi";
import css from "./SearchBar.module.css";

interface Props {
  onSearch: (query: string) => void;
}

interface FormValues {
  query: string;
}

export default function SearchBar({ onSearch }: Props) {
  const initialValues: FormValues = { query: "" };
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    if (values.query.trim() === "") {
      toast.error("Fill in the input field!");
    } else {
      onSearch(values.query.trim());
    }
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
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
