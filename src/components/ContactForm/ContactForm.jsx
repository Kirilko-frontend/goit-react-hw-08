import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"),
  number: Yup.string()
    .matches(/^[0-9\s\-()+]+$/, "Phone number is not valid")
    .required("Number is required"),
});

export default function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />
        </label>

        <label>
          Number
          <Field name="number" />
          <ErrorMessage
            name="number"
            component="div"
            style={{ color: "red" }}
          />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
