import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short!").required("Required"),
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 400, margin: "30px auto" }}>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting, resetForm, setErrors }) => {
          try {
            const result = await dispatch(login(values)).unwrap();
            localStorage.setItem("token", result.token);
            localStorage.setItem("email", result.user.email);
            resetForm();
            navigate("/contacts");
          } catch (error) {
            setErrors({ password: "Invalid email or password" });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
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
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
