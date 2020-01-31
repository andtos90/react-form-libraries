import React from 'react';
import { Formik, Field, Form } from 'formik';

import FormField from './FormField';

const NUMBER_OF_FIELDS = 1000;

const validate = values => {
  const errors = {};
  for (const [key, value] of Object.entries(values)) {
    const keySplit = key.split('-');
    if (keySplit[1] !== value) errors[key] = `Value should be ${keySplit[1]}`;
  }
  return errors;
};

const FormikForm = () => (
  <>
    <h1>Formik Form</h1>
    <Formik
      initialValues={{}}
      validate={validate}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ errors, touched }) => (
        <Form
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {Array.from(Array(NUMBER_OF_FIELDS).keys()).map(i => (
            <Field key={`text-${i}`} name={`text-${i}`}>
              {({ field }) => (
                <FormField
                  field={field}
                  errorMessage={
                    errors[`text-${i}`] &&
                    touched[`text-${i}`] &&
                    errors[`text-${i}`]
                  }
                />
              )}
            </Field>
          ))}
        </Form>
      )}
    </Formik>
  </>
);

export default FormikForm;
