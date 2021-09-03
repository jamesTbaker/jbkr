/**
 * @name Dimmer
 * @component
 * @category Ingredients
 * @smart
 * @description Dimmer.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Style from '../../../services/styles';

const DimmerElement = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: ${Style.ZIndex('content-dimmer')};
	background: ${Style.Color({ token: 'dark-blue', alpha: 0.86 })};
	visibility: ${(props) => (props.visible ? 'visible' : 'hidden')}
`;

const Dimmer = ({ 
	handler,
	visible,
}) => (
	<>
		<DimmerElement
			onClick={handler}
			visible={visible}
		/>
	</>
);

Dimmer.propTypes = {
	handler: PropTypes.func,
	visible: PropTypes.bool,
};

export default Dimmer;
