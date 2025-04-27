import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./PersonalDetails.css";

function PersonalDetails() {
  return (
    <section className="personal-details-grid">
      {/* Empty margins */}
      <div className="personal-details-empty"></div>

      {/* Main Section */}
      <div className="personal-details-main">
        <h3 className="personal-details-heading">Personal Details</h3>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            privacyPolicy: false,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("⚠️ First name is required"),
            lastName: Yup.string().required("⚠️ Last name is required"),
            email: Yup.string()
              .email("⚠️ Invalid email address")
              .required("⚠️ Email is required"),
            phone: Yup.string().required("⚠️ Phone number is required"),
            privacyPolicy: Yup.boolean().oneOf(
              [true],
              " ⚠️ You must accept the Privacy Policy"
            ),
          })}
          onSubmit={(values) => {
            console.log("Personal Details Submitted:", values);
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
              {/* Row 1: First Name and Last Name */}
              <div className="personal-details-row">
                <div className="personal-details-col">
                  <label>First Name</label>
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    className="input-field"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="personal-details-col">
                  <label>Last Name</label>
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    className="input-field"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>

              {/* Row 2: Email and Phone */}
              <div className="personal-details-row">
                <div className="personal-details-col">
                  <label>Email</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="input-field"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="personal-details-col">
                  <label>Phone Number</label>
                  <Field
                    name="phone"
                    type="text"
                    placeholder="Enter your phone number"
                    className="input-field"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>

              {/* Row 3: Privacy Policy Checkbox */}
              <div className="personal-details-row">
                <div className="personal-details-col" style={{ flex: 1 }}>
                  <label>
                    <Field type="checkbox" name="privacyPolicy" /> I agree to
                    the Privacy Policy
                  </label>
                  <ErrorMessage
                    name="privacyPolicy"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>

              {/* Confirm Button */}
              <div style={{ marginTop: "30px", textAlign: "center" }}>
                <button type="submit" className="submit-button">
                  Confirm
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Empty margins */}
      <div className="personal-details-empty"></div>
    </section>
  );
}

export default PersonalDetails;
