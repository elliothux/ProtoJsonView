
import React from 'react';
import PropTypes from 'prop-types';
import parseJson from 'big-json-parser';

import Message from './component/Message';
import TextMessage from './component/TextMessage';

import './index.scss';


function ProtoJsonView(props) {
  const {
    src, rootName, collapsed, mode, textView
  } = props;
  let value;
  if (typeof src === 'string') {
    value = parseJson(src);
  } else if (mode === 'proto') {
    value = src;
  } else {
    value = parseJson(JSON.stringify(src));
  }

  const Component = textView ? TextMessage : Message;
  return (
    <Component
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
  mode: PropTypes.oneOf(['proto', 'json']),
  textView: PropTypes.bool,
};

ProtoJsonView.defaultProps = {
  rootName: 'Root',
  collapsed: true,
  mode: 'proto',
  textView: false,
};


export default ProtoJsonView;
