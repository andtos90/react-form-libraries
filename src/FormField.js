import React from 'react';
import { Field } from 'formik';

const FormField = ({ field, errorMessage }) => (
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '200px' }}>
    <textarea {...field}></textarea>
    <p>{errorMessage}</p>
  </div>
);

export default FormField;
