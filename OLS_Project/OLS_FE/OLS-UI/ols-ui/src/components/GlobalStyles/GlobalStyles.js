import React from 'react';
import PropTypes from 'prop-types';
import './GlobalStyles.scss';

const GlobalStyles = ({ children }) => {
    // return duy nhất 1 children không thể nhận children khác
    //return React.Children.only(children);
    return children;
};

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
