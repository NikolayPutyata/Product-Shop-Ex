import { Field, Formik, ErrorMessage } from "formik";
import { Form } from "formik";
import * as Yup from "yup";

const SearchForm = ({ setSearchParams }) => {
  const initialValues = {
    query: "",
  };

  const validationSchema = Yup.object({
    query: Yup.string().required(),
  });

  const onSubmitFu = (values, options) => {
    const query = values.query.trim();

    setSearchParams(query);
    options.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitFu}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <label className="input input-bordered flex items-center gap-2">
            <Field
              name="query"
              type="text"
              className="grow"
              placeholder="Search"
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </label>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
