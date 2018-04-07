
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import parseJson from 'json-parser';

import Message from './component/Message';

import './index.scss';


function ProtoJsonView(props) {
    const { src, rootName, collapsed, mode } = props;
    let value;
    if (mode === 'proto') {
        value = typeof src === 'string' ?
            parseJson(src) : src;
    } else {
        // TODO
    }
    return (
        <Message
            value={value}
            name={rootName}
            collapsed={collapsed}
            nestedDepth={1}
        />
    );
}

ProtoJsonView.propTypes = {
    src: PropTypes.PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array,
    ]).isRequired,
    rootName: PropTypes.string,
    collapsed: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    mode: PropTypes.oneOf(['proto', 'json'])
};

ProtoJsonView.defaultProps = {
    rootName: 'Root',
    collapsed: true,
    mode: 'proto'
};


export default ProtoJsonView;
