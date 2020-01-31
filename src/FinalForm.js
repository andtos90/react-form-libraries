import React from 'react';
import { Form, Field } from 'react-final-form';
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

const FinalForm = () => {
  return (
    <>
      <h1>Final Form</h1>
      <Form
        subscription={{ submitting: true, pristine: true }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        validate={validate}
        render={({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
          >
            {Array.from(Array(NUMBER_OF_FIELDS).keys()).map(i => (
              <Field name={`text-${i}`}>
                {({ input, meta }) => (
                  <FormField
                    field={input}
                    errorMessage={meta.error && meta.touched && meta.error}
                  />
                )}
              </Field>
            ))}
          </form>
        )}
      />
    </>
  );
};

export default FinalForm;
