import React from "react";
import { Select, Radio, DatePicker, TimePicker } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "./Reservation.css";

const { Option } = Select;

function Reservation() {
  return (
    <section className="reservation-grid">
      {/* Empty margin */}
      <div className="reservation-empty"></div>

      {/* Main Form */}
      <div className="reservation-main">
        {/* Row 1: Radio buttons */}
        <div className="reservation-row">
          <div className="reservation-col">
            <Radio.Group>
              <Radio value="indoor">Indoor seating</Radio>
              <Radio value="outdoor">Outdoor seating</Radio>
            </Radio.Group>
          </div>
        </div>

        {/* Row 2: Date and Number of Diners */}
        <div className="reservation-row">
          <div className="reservation-col">
            <label>Date</label>
            <DatePicker
              suffixIcon={<CalendarOutlined />}
              style={{ width: "100%", height: "5rem" }}
              placeholder="Select Date"
            />
          </div>
          <div className="reservation-col">
            <label>Number of Diners</label>
            <Select
              placeholder="No. of Diners"
              suffixIcon={<UserOutlined />}
              style={{ width: "100%" }}
            >
              <Option value="1">2</Option>
              <Option value="2">4</Option>
              <Option value="3">6</Option>
              <Option value="4">8</Option>
            </Select>
          </div>
        </div>

        {/* Row 3: Occasion and Time */}
        <div className="reservation-row">
          <div className="reservation-col">
            <label>Occasion</label>
            <Select
              placeholder="Occasion"
              suffixIcon={<SmileOutlined />}
              style={{ width: "100%" }}
            >
              <Option value="birthday">Birthday</Option>
              <Option value="anniversary">Anniversary</Option>
              <Option value="other">Other</Option>
            </Select>
          </div>
          <div className="reservation-col">
            <label>Time</label>
            <TimePicker
              suffixIcon={<ClockCircleOutlined />}
              style={{ width: "100%" }}
              use12Hours
              format="h:mm A"
              placeholder="Select Time"
            />
          </div>
        </div>
      </div>

      {/* Empty margin */}
      <div className="reservation-empty"></div>
    </section>
  );
}

export default Reservation;
