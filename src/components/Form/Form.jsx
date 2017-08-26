import React from 'react';
import Accordion from '../Accordion';
import Field from '../Field';
import Button from '../Button';
import './Form.css';

function Form() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert('submitted');
  };
  return (
    <form className="Form" onSubmit={onSubmit}>
      <Accordion title="user info">
        <Field placeholder="username*" required />
        <Field placeholder="first name*" required />
        <Field placeholder="last name*" required />
      </Accordion>
      <Accordion title="user contact">
        <Field placeholder="email*" required />
      </Accordion>
      <div className="Submit">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default Form;
