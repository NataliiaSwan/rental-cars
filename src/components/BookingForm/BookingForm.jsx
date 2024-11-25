// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import css from './BookingForm.module.css';

// const BookingForm = () => {
//   const validationSchema = Yup.object({
//     name: Yup.string().required('Name is required').min(2, 'Name is too short'),
//     email: Yup.string()
//       .email('Invalid email format')
//       .required('Email is required'),
//     bookingDate: Yup.date().required('Booking date is required'),
//     comment: Yup.string().max(500, 'Comment is too long'),
//   });

//   const initialValues = {
//     name: '',
//     email: '',
//     bookingDate: '',
//     comment: '',
//   };

//   const handleSubmit = (values, { resetForm }) => {
//     console.log('Form data:', values);
//     resetForm(); // Очистити форму після відправки
//   };

//   return (
//     <div className={css.formContainer}>
//       <h2 className={css.formTitle}>Book your campervan now</h2>
//       <p className={css.formText}>
//         Stay connected! We are always ready to help you.
//       </p>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//           <div className={css.formGroup}>
//             <Field
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Name*"
//               className={css.inputField}
//             />
//             <ErrorMessage name="email" component="div" className={css.error} />
//           </div>

//           <div className={css.formGroup}>
//             <Field
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Email*"
//               className={css.inputField}
//             />
//             <ErrorMessage name="email" component="div" className={css.error} />
//           </div>

//           <div className={css.formGroup}>
//             {/* <Field
//               type="date"
//               id="bookingDate"
//               name="bookingDate"
//               placeholder="Booking date*"
//             />

//             <ErrorMessage
//               name="bookingDate"
//               component="div"
//               className={css.error}
//             /> */}
//             <label htmlFor="bookingDate" className={css.label}>
//               Booking date*
//             </label>
//             <Field
//               type="date"
//               id="bookingDate"
//               name="bookingDate"
//               className={css.inputField}
//             />
//             <ErrorMessage
//               name="bookingDate"
//               component="div"
//               className={css.error}
//             />
//           </div>

//           <div className={css.formGroup}>
//             <Field
//               as="textarea"
//               id="comment"
//               name="comment"
//               placeholder="Comment"
//             />
//             <ErrorMessage
//               name="comment"
//               component="div"
//               className={css.error}
//             />
//           </div>

//           <button type="submit" className={css.submitButton}>
//             Send
//           </button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default BookingForm;
