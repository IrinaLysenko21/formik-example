import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

export const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Required"),
  channel: Yup.string().required("Required"),
});

const MyForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="form">
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <Field className="form-input" type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <Field className="form-input" type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="channel">
            Channel
          </label>
          <Field
            className="form-input"
            type="text"
            id="channel"
            name="channel"
          />
          <ErrorMessage name="channel" />
        </div>

        <button className="submitBtn" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default MyForm;
