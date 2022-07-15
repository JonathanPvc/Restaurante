import React from 'react';

import PropTypes from 'prop-types';

const Empty = ({ children }) => <div>{children}</div>;

Empty.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Empty;