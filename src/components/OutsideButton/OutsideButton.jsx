import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './OutsideButton.css';

function OutsideButton({submitForm}) {
  return (
    <div className="OutsideButton">
      <Button onClick={submitForm} type="submit">Outside button</Button>
    </div>
  );
}

OutsideButton.propTypes = {
  submitForm: PropTypes.func,
};

export default OutsideButton;
