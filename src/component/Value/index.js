import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { types, typesMap, isString } from '../../utils.js';

import './index.scss';


function Value(props) {
    const {
        value, type, className,
    } = props;
    const displayValue = isString(type) ?
        `"${value}"` : `${value}`;
    return (
        <span className={`json-view-input-field ${className}`}>
            {displayValue}
        </span>
    );
}

Value.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(types),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    className: PropTypes.string
};
Value.defaultProps = {
    type: typesMap.STRING,
    value: '',
    className: '',
};


export default Value;
