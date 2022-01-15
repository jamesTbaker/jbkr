import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, zIndexNumber } from '@jbkr/style-service';

const DimmerElement = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: ${zIndexNumber().contentDimmer};
	background-color: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 37,
			'alpha': .85,
			'format': 'string',
		})};
	visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;




export const Dimmer = ({
	handler,
	visible,
}) => (
	<DimmerElement
		onClick={handler}
		visible={visible}
	/>
);
