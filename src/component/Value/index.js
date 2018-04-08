import React from 'react';
import PropTypes from 'prop-types';

import { types, typesMap, isString, isNull, isBool } from '../../utils.js';

import './index.scss';


function Value(props) {
  let {
    value, type, className,
  } = props;
  let displayValue;
  if (isString(type)) {
    displayValue = `"${value}"`;
  } else if (isNull(type)) {
    displayValue = '';
  } else if (isBool(type)) {
    displayValue = value.toString();
    className += ` ${displayValue}`;
  } else {
    displayValue = value.toString();
  }
  return (
    <span className={`json-view-value ${className}`}>
      {displayValue}
    </span>
  );
}

Value.propTypes = {
  type: PropTypes.oneOf(types),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  className: PropTypes.string,
};
Value.defaultProps = {
  type: typesMap.STRING,
  value: null,
  className: '',
};


export default Value;
