import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  city: Yup.string().required("City is required"),
  text: Yup.string(),
});

const OrderForm = () => {
  const handleSubmit = (values, options) => {
    console.log(values);

    options.resetForm();
  };

  const initialValues = {
    username: "",
    email: "",
    phone: "",
    text: "",
    city: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col w-96 gap-3">
          <label
            className={`input input-bordered flex items-center gap-2 ${
              touched.username && errors.username ? "border-red-500" : ""
            }`}
          >
            Name
            <Field name="username" type="text" className="grow" />
          </label>
          <label
            className={`input input-bordered flex items-center gap-2 ${
              touched.email && errors.email ? "border-red-500" : ""
            }`}
          >
            Email
            <Field name="email" type="email" className="grow" />
          </label>
          <label
            className={`input input-bordered flex items-center gap-2 ${
              touched.phone && errors.phone ? "border-red-500" : ""
            }`}
          >
            Phone
            <Field name="phone" type="tel" className="grow" />
          </label>

          <Field
            as="select"
            name="city"
            className={`select select-bordered w-full ${
              touched.city && errors.city ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              City
            </option>
            <option value="kyiv">Kyiv</option>
            <option value="odesa">Odesa</option>
            <option value="kharkiv">Kharkiv</option>
          </Field>

          <Field
            as="textarea"
            name="text"
            type="text"
            className={`textarea textarea-bordered textarea-md ${
              touched.text && errors.text ? "border-red-500" : ""
            }`}
            placeholder="Write your wishes"
          />

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="btn btn-outline btn-success w-80 text-lg"
            >
              Order!
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
