import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"),
  number: Yup.string()
    .matches(/^[0-9\s\-()+]+$/, "Phone number is not valid")
    .required("Number is required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        const isDuplicate = contacts.some(
          (contact) =>
            typeof contact.name === "string" &&
            contact.name.toLowerCase() === values.name.toLowerCase()
        );

        if (isDuplicate) {
          alert(`${values.name}  is already in contacts`);
          return;
        }

        dispatch(addContact(values));
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
