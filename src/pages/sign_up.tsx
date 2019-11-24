import { Formik, Field, Form } from "formik";
import { useCreateUserMutation } from "../graphql/generated";

import "../style.css";

const LoginPage = () => {
  const [createUser, { data, loading }] = useCreateUserMutation();

  return (
    <div className="w-screen h-screen bg-gray-200 pt-16">
      <Formik
        initialValues={{ username: "", pass: "" }}
        onSubmit={values => createUser({ variables: { ...values } })}
      >
        {props => (
          <Form className="flex flex-col w-1/2 xl:w-1/4 m-auto shadow-xl rounded p-6 bg-white">
            <Field name="username">
              {field => (
                <span className="m-auto pt-2 font-thin">
                  <label htmlFor="username" className="font-thin">
                    Username
                  </label>
                  <br />
                  <div className="pr-2 pl-2 pt-px pb-px border rounded border-gray-500">
                    <input {...field} id="username" />
                  </div>
                </span>
              )}
            </Field>
            <Field name="pass">
              {field => (
                <span className="m-auto pt-2 font-thin">
                  <label htmlFor="password">Password</label>
                  <br />
                  <div className="pr-2 pl-2 pt-px pb-px border rounded border-gray-500">
                    <input {...field} id="password" />
                  </div>
                </span>
              )}
            </Field>
            <button
              type="submit"
              className="px-2 py-px text mt-4 text-gray-800 border rounded w-1/4 m-auto bg-gray-200 hover:bg-gray-400 hover:shadow-none"
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
