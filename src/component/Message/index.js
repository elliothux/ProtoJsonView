import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Value from '../Value';
import Repeated from '../Repeated';
import Tooltip from '../Tooltip';
import Icon from '../Icon';

import './index.scss';
import { preventDefault, typesMap } from '../../utils.js';


class Message extends Component {
    static propTypes = {
      value: PropTypes.array.isRequired,
      name: PropTypes.string.isRequired,
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

    renderValue = (node) => {
      const {
        name, type, value, documentation,
      } = node;
      return (
        <div
          className={`json-view-item ${type}`}
          key={name}
        >
          <div className="json-view-item-info">
            <div className="json-view-item-name">
              <span>{`"${name}":`}</span>
              <Tooltip text={documentation} />
            </div>
            <span className="json-view-item-type"> {type}</span>
          </div>
          <Value
            className="json-view-item-value"
            name={name}
            type={type}
            value={value}
            documentation={documentation}
          />
        </div>
      );
    };
    renderMessage = (node) => {
      const { name, value, documentation } = node;
      const { nestedDepth, collapsed } = this.props;
      return (
        <Message
          key={name}
          value={value}
          name={name}
          nestedDepth={nestedDepth + 1}
          collapsed={collapsed}
          documentation={documentation}
        />
      );
    };
    renderRepeated = (node) => {
      const {
        name, type, value, documentation,
      } = node;
      const { nestedDepth, collapsed } = this.props;
      return (
        <Repeated
          key={name}
          value={value || []}
          name={name}
          type={type}
          collapsed={collapsed}
          nestedDepth={nestedDepth + 1}
          documentation={documentation}
        />
      );
    };
    renderNode = (node) => {
      const { label, type } = node;
      if (label === 'REPEATED') {
        return this.renderRepeated(node);
      } else if (type === typesMap.MESSAGE) {
        return this.renderMessage(node);
      }
      return this.renderValue(node);
    };

    render() {
      const { collapsed } = this.state;
      const {
        value,
        value: { length },
        name,
        nestedDepth,
        documentation,
      } = this.props;
      const isRoot = nestedDepth === 1;
      return (
        <div
          className={`json-view${
                    collapsed ? ' json-view-collapsed' : ''}${
                    isRoot ? ' json-view-root' : ''} message`}
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
            <span
              if={!isRoot}
              className="json-view-item-type"
            > message
            </span>
            <span className="json-view-tag">{'\u007b'}</span>
            <span className={collapsed ? '' : 'json-view-hide'}>
              <span if={length > 0} className="json-view-points">...</span>
              <span className="json-view-tag">{'\u007D'}</span>
            </span>
            <span if={length === 0} className="json-view-count-empty">Empty</span>
            <span else className="json-view-count">{length} Items</span>
          </div>
          <div if={!collapsed} className="json-view-items">{value.map(this.renderNode)}</div>
          <div className="json-view-end">
            <span onClick={this.handleToggleCollapsed}>{'\u007d'}</span>
          </div>
        </div>
      );
    }
}


export default Message;
