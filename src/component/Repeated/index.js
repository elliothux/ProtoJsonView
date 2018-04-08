import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Value from '../Value';
import Message from '../Message';
import Icon from '../Icon';
import { preventDefault, types, typesMap } from '../../utils.js';

import './index.scss';
import Tooltip from '../Tooltip';


class Repeated extends Component {
    static propTypes = {
      value: PropTypes.array.isRequired,
      type: PropTypes.oneOf(types).isRequired,
      collapsed: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
      nestedDepth: PropTypes.number.isRequired,
      documentation: PropTypes.string,
    };
    static defaultProps = {
      documentation: '',
    };

    constructor(...args) {
      super(...args);
      const { nestedDepth, collapsed } = this.props;
      this.state = {
        collapsed: typeof collapsed === 'number' ?
          nestedDepth >= collapsed : !!collapsed,
      };
    }

    state = { collapsed: false };

    handleToggleCollapsed = (e, collapsed) => {
      preventDefault(e);
      this.setState({
        collapsed: typeof collapsed === 'boolean' ?
          collapsed : !this.state.collapsed,
      });
    };

    renderValue = (node, index) => {
      const { name } = this.props;
      const { type, value } = node;
      return (
        <div
          key={index}
          className="json-view-repeated-item"
        >
          <span className="json-view-repeated-item-index">{index}: </span>
          <Value
            className="json-view-repeated-item-value"
            key={`${index}-1`}
            name={name}
            type={type}
            value={value}
          />
        </div>
      );
    };
    renderMessage = (node, index) => {
      const { nestedDepth, collapsed } = this.props;
      const { value } = node;
      return (
        <Message
          key={index}
          value={value}
          name={index.toString()}
          nestedDepth={nestedDepth + 1}
          collapsed={collapsed}
        />
      );
    };
    renderNode = (node, index) => {
      const { type } = this.props;
      if (type === typesMap.MESSAGE) {
        return this.renderMessage(node, index);
      }
      return this.renderValue(node, index);
    };

    render() {
      const { collapsed } = this.state;
      const {
        value,
        value: { length },
        name,
        documentation,
        type,
      } = this.props;
      const isEmpty = length === 0;

      return (
        <div
          className={`json-view-repeated json-view${
                    collapsed ? ' json-view-collapsed' : ''} ${type}`}
          key={name}
        >
          <div
            className="json-view-start"
            onClick={this.handleToggleCollapsed}
          >
            <Icon type="COLLAPSED" className="json-view-expand" />
            <div className="json-view-name">
              <span>{`"${name}": `}</span>
              <Tooltip text={documentation} />
            </div>
            <span className="json-view-item-type"> {type}[]</span>
            <span className="json-view-tag">[</span>
            <span className={collapsed ? '' : 'json-view-hide'}>
              <span className={`json-view-points${isEmpty ? ' json-view-hide' : ''}`}>...</span>
              <span className="json-view-tag">]</span>
            </span>
            <span if={isEmpty} className="json-view-count-empty">Empty</span>
            <span else className="json-view-count">{length} Items</span>
          </div>
          <div className="json-view-items">{value.map(this.renderNode)}</div>
          <div className="json-view-end">
            <span onClick={this.handleToggleCollapsed}>]</span>
          </div>
        </div>
      );
    }
}


export default Repeated;
