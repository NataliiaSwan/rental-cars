import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';

const BookingForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(2, 'Name is too short'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    bookingDate: Yup.date().required('Booking date is required'),
    comment: Yup.string().max(500, 'Comment is too long'),
  });

  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form data:', values);
    resetForm(); // Очистити форму після відправки
  };

  return (
    <div className={css.formContainer}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* Name */}
          <div className={css.formGroup}>
            <label htmlFor="name">Name*</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          {/* Email */}
          <div className={css.formGroup}>
            <label htmlFor="email">Email*</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          {/* Booking Date */}
          <div className={css.formGroup}>
            <label htmlFor="bookingDate">Booking date*</label>
            <Field type="date" id="bookingDate" name="bookingDate" />
            <ErrorMessage
              name="bookingDate"
              component="div"
              className={css.error}
            />
          </div>

          {/* Comment */}
          <div className={css.formGroup}>
            <label htmlFor="comment">Comment</label>
            <Field
              as="textarea"
              id="comment"
              name="comment"
              placeholder="Your comment here..."
            />
            <ErrorMessage
              name="comment"
              component="div"
              className={css.error}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className={css.submitButton}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
