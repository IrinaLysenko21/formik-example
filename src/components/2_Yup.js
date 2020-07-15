import React from "react";
import { useFormik } from "formik";
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

const Form = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formik.touched);

  return (
    <div>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          ></input>
          <div className="error-message-wrap">
            <p className="error-message">
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""}
            </p>
          </div>
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
          <div className="error-message-wrap">
            <p className="error-message">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </p>
          </div>
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="channel">
            Channel
          </label>
          <input
            className="form-input"
            type="text"
            id="channel"
            name="channel"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.channel}
          ></input>
          <div className="error-message-wrap">
            <p className="error-message">
              {formik.touched.channel && formik.errors.channel
                ? formik.errors.channel
                : ""}
            </p>
          </div>
        </div>

        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
