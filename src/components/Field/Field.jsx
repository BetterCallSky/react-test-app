import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Field.css';

function Field({hasError, ...rest}) {
  return (
    <div className={cn('Field', {'Field-error': hasError})}>
      <input {...rest} />
    </div>
  );
}

Field.propTypes = {
  hasError: PropTypes.bool,
};

export default Field;
