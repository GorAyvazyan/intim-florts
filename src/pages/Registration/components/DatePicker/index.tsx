import React, { useContext, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import RegistrationContext from "../../../../context/RegistrationContext";
import { StyledTitle, StyledInfo, DatePickerWrapper, StyledDatePicker } from "./styles";

function DatePicker() {
  const { formData, updateFormData } = useContext(RegistrationContext);
  const validationSchema = Yup.object({
    day: Yup.number().min(1).max(31).required("Please enter a valid day"),
    month: Yup.number().min(1).max(12).required("Please enter a valid month"),
    year: Yup.number()
      .min(1900)
      .max(new Date().getFullYear() - 18)
      .required("Please enter a valid year")
  });

  const formik = useFormik({
    initialValues: {
      day: dayjs(formData.date) || "",
      month: dayjs(formData.date) || "",
      year: dayjs(formData.date) || ""
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  useEffect(() => {
    if (
      dayjs(formik.values.day).isValid() &&
      dayjs(formik.values.month).isValid() &&
      dayjs(formik.values.year).isValid()
    ) {
      const formattedValue = dayjs(formik.values.year).format("YYYY-MM-DD");
      updateFormData({ date: formattedValue });
    }
  }, [formik.values]);

  return (
    <>
      <StyledTitle>Your age</StyledTitle>
      <StyledInfo>You must be at least 18 years old to use Intim Flort</StyledInfo>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form onSubmit={formik.handleSubmit}>
          <DatePickerWrapper>
            <StyledDatePicker
              label="Day"
              openTo="day"
              views={["day"]}
              format="DD"
              value={formik.values.day}
              onChange={(value) => formik.setFieldValue("day", value)}
            />
            <StyledDatePicker
              label="Month"
              openTo="month"
              views={["month"]}
              format="MMMM"
              value={formik.values.month}
              onChange={(date) => formik.setFieldValue("month", date)}
            />
            <StyledDatePicker
              label="Year"
              openTo="year"
              views={["year"]}
              format="YYYY"
              value={formik.values.year}
              onChange={(date) => formik.setFieldValue("year", date)}
            />
          </DatePickerWrapper>
        </form>
      </LocalizationProvider>
    </>
  );
}

export default DatePicker;
