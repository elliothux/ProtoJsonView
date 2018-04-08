import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const iconTypesMap = {
  COLLAPSED: 'COLLAPSED',
};


class Icon extends PureComponent {
    static propTypes = {
      type: PropTypes.oneOf(Object.keys(iconTypesMap)).isRequired,
    };
    static types = iconTypesMap;

    render() {
      const { types: iconTypes } = Icon;
      const { type, ...rest } = this.props;
      /* eslint-disable max-len */
      switch (type) {
        case iconTypes.COLLAPSED:
          return (
            <svg {...rest} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M755.552 495.36l-384-296.672a31.936 31.936 0 0 0-51.552 25.28v593.504a32 32 0 0 0 51.552 25.28l384-296.704a32 32 0 0 0 0-50.656"
              />
            </svg>
          );
        default:
          return null;
      }
      /* eslint-enable max-len */
    }
}


export default Icon;
