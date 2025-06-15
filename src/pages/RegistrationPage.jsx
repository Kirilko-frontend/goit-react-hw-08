import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short!").required("Required"),
});

export default function RegisterPage() {
  const dispatch = useDispatch();

  return (
    <div style={{ maxWidth: 400, margin: "30px auto" }}>
      <h2>Register</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(register(values));
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: 10 }}>
              <label htmlFor="name">Name:</label>
              <Field
                type="text"
                name="name"
                id="name"
                style={{ width: "100%", padding: 8 }}
              />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red", fontSize: 12 }}
              />
            </div>

            <div style={{ marginBottom: 10 }}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                name="email"
                id="email"
                style={{ width: "100%", padding: 8 }}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", fontSize: 12 }}
              />
            </div>

            <div style={{ marginBottom: 10 }}>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                name="password"
                id="password"
                style={{ width: "100%", padding: 8 }}
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red", fontSize: 12 }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{ padding: "8px 16px" }}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
