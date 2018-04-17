import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import { typesMap } from '../../utils.js';


class TextMessage extends Component {
  static propTypes = {
    value: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    nestedDepth: PropTypes.number.isRequired,
    isRepeatedItem: PropTypes.bool,
    isLast: PropTypes.bool,
  };
  static defaultProps = {
    isRepeatedItem: false,
    isLast: false,
  };

  renderValue = (node, isRepeatedItem, index, isLast) => {
    const { name, type, value } = node;
    let displayValue;
    if (type === typesMap.BYTES || type === typesMap.STRING) {
      displayValue = `"${value}"`;
    } else if (type === 'null') {
      displayValue = 'null';
    } else {
      displayValue = value.toString();
    }
    return (
      isRepeatedItem ?
        <span
          className={`text-view-item ${type}`}
          key={index}
        >
          {displayValue.toString()}{isLast ? '' : ', '}
        </span> :
        <div
          className={`text-view-item ${type}`}
          key={name}
        >
          {`"${name}": `}
          {displayValue.toString()}{isLast ? '' : ','}
        </div>
    );
  };
  renderMessage = (node, isRepeatedItem, index, isLast) => {
    const { name, value } = node;
    const { nestedDepth } = this.props;
    return (
      <TextMessage
        key={isRepeatedItem ? index : name}
        value={value}
        name={name}
        nestedDepth={nestedDepth + 1}
        isRepeatedItem={isRepeatedItem}
        isLast={isLast}
      />
    );
  };
  renderRepeated = (node, isLast) => {
    const {
      name, type, value,
    } = node;
    const renderNode = (i, index) => this.renderNode(i, true, index, index === value.length - 1);
    return (
      <div
        className={`text-view-repeated ${type}`}
        key={name}
      >
        {`"${name}": `}[ {value.map(renderNode)} ]{isLast ? '' : ','}
      </div>
    );
  };
  renderNode = (node, isRepeatedItem, index, isLast) => {
    if (typeof isRepeatedItem !== 'boolean') {
      isRepeatedItem = false;
    }
    if (typeof isLast !== 'boolean') {
      isLast = false;
    }
    const { label, type } = node;
    if (label === 'REPEATED') {
      return this.renderRepeated(node, isLast);
    } else if (type === typesMap.MESSAGE) {
      return this.renderMessage(node, isRepeatedItem, index, isLast);
    }
    return this.renderValue(node, isRepeatedItem, index, isLast);
  };

  render() {
    const {
      value,
      name,
      nestedDepth,
      isRepeatedItem,
      isLast
    } = this.props;
    const isRoot = nestedDepth === 1;
    const renderNode = (i, index) => this.renderNode(i, false, index, index === value.length - 1);
    return (
      <div
        className={`text-view${
          isRoot ? ' text-view-root' : ''} message`}
        key={name}
      >
        <div className="text-view-start">{isRepeatedItem ? '' : `"${name}": `}{'{'}</div>
        <div className="text-view-items">{value.map(renderNode)}</div>
        <div className="text-view-end">{'\u007d'}{(isRoot || isLast) ? '' : ','}</div>
      </div>
    );
  }
}


export default TextMessage;
