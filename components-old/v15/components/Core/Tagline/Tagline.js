import React from 'react';
import PropTypes from 'prop-types';

// define component
const Tagline = ({
	text,
}) => (
	<p>{text}</p>
);
// export higher order component connected to redux store
export default Tagline;
