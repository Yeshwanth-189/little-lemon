import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Select, DatePicker, TimePicker } from "antd";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  UserOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "./Reservation.css";

const { Option } = Select;

const validationSchema = Yup.object({
  seating: Yup.string().required("⚠️ Seating type is required"),
  date: Yup.date().required("⚠️ Date is required"),
  diners: Yup.string().required("⚠️ Number of diners is required"),
  occasion: Yup.string().required("⚠️ Occasion is required"),
  time: Yup.string().required("⚠️ Time is required"),
});

function Reservation() {
  const navigate = useNavigate();
  return (
    <section className="reservation-grid">
      {/* Empty margin */}
      <div className="reservation-empty"></div>

      {/* Main Form */}
      <div className="reservation-main">
        <h3 className="reservation-heading">Reservations</h3>

        <Formik
          initialValues={{
            seating: "",
            date: null,
            diners: "",
            occasion: "",
            time: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Reservation Form Data:", values);
            navigate("/personal-details");
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              {/* Row 1: Radio Buttons */}
              <div className="reservation-row">
                <div className="reservation-col">
                  <label>
                    <Field type="radio" name="seating" value="indoor" />
                    Indoor seating
                  </label>
                </div>
                <div className="reservation-col">
                  <label>
                    <Field type="radio" name="seating" value="outdoor" />
                    Outdoor seating
                  </label>
                </div>
              </div>
              <ErrorMessage
                name="seating"
                component="div"
                className="error-message"
              />

              {/* Row 2: Date and Number of Diners */}
              <div className="reservation-row">
                <div className="reservation-col">
                  <label>Date</label>
                  <DatePicker
                    suffixIcon={<CalendarOutlined />}
                    style={{ width: "100%", height: "3rem" }}
                    placeholder="Select Date"
                    onChange={(date, dateString) =>
                      setFieldValue("date", dateString)
                    }
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="reservation-col">
                  <label>Number of Diners</label>
                  <Select
                    placeholder="No. of Diners"
                    suffixIcon={<UserOutlined />}
                    style={{ width: "100%", height: "3rem" }}
                    onChange={(value) => setFieldValue("diners", value)}
                  >
                    <Option value="2">2</Option>
                    <Option value="4">4</Option>
                    <Option value="6">6</Option>
                    <Option value="8">8</Option>
                  </Select>
                  <ErrorMessage
                    name="diners"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>

              {/* Row 3: Occasion and Time */}
              <div className="reservation-row">
                <div className="reservation-col">
                  <label>Occasion</label>
                  <Select
                    placeholder="Occasion"
                    suffixIcon={<SmileOutlined />}
                    style={{ width: "100%", height: "3rem" }}
                    onChange={(value) => setFieldValue("occasion", value)}
                  >
                    <Option value="birthday">Birthday</Option>
                    <Option value="anniversary">Anniversary</Option>
                    <Option value="engagement">Engagement</Option>
                  </Select>
                  <ErrorMessage
                    name="occasion"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="reservation-col">
                  <label>Time</label>
                  <TimePicker
                    suffixIcon={<ClockCircleOutlined />}
                    style={{ width: "100%", height: "3rem" }}
                    use12Hours
                    format="h:mm A"
                    placeholder="Select Time"
                    onChange={(time, timeString) =>
                      setFieldValue("time", timeString)
                    }
                  />
                  <ErrorMessage
                    name="time"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: "30px", textAlign: "center" }}>
                <button type="submit" className="submit-button">
                  Reserve a Table
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Empty margin */}
      <div className="reservation-empty"></div>
    </section>
  );
}

export default Reservation;
