import { Field, Formik } from "formik";
import { Form } from "formik";

const SearchForm = ({ setSearchingWord }) => {
  const initialValues = {
    query: "",
  };
  const onSubmitFu = (values, options) => {
    if (values.query.trim() === "") {
      alert("write some!");
      return;
    }

    setSearchingWord(values.query);

    options.resetForm();
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmitFu}>
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
};

export default SearchForm;
