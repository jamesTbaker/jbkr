import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { zIndexNumber } from '@jbkr/style-service';
import { Button } from '../../core/Button/Button';
import { Copy } from '../Copy/Copy';

const FadeInAnimation = keyframes`
    0% { opacity: 0; height: 0; }
    100% { opacity: 1; height: 100%; }
`;
const CollapsibleContentContainer = styled.div`
	height: 0;
	/* opacity: 0; */
	overflow: hidden;

	transition: height .75s;
	/* , opacity .75s; */
	z-index: ${zIndexNumber().compressedTableOfContentsContainer};
	${({ $contentVisible }) => $contentVisible && css`
		height: 100%;
		/* opacity: 1;
		animation-name: ${FadeInAnimation};
		animation-duration: 0.35s;
		animation-timing-function: ease-in;
		animation-delay: 0s;
		animation-iteration-count: 1;
		animation-direction: normal;
		animation-fill-mode: none;
		animation-play-state: running; */
	`}
`;
/* const CollapsibleContainer = styled.div`

`;*/
/**
 * Used to hide content until the user chooses to consume it.
 */
export const Collapsible = ({
	button,
	internalID,
	copyKind,
	children,
}) => {
	const [
		contentVisible,
		setContentVisible,
	] = useState(false);
	const handleButtonClick = () => {
		setContentVisible(!contentVisible);
	};
	return (
		<div>
			<Button
				size={button.size}
				surfaceStyle={button.surfaceStyle}
				contextColor={button.contextColor}
				text={button.text}
				iconAfter="chevron-down"
				iconAfterTransform={contentVisible ? 'rotate(180deg)' : ''}
				clickHandler={handleButtonClick}
				ariaDisabled={contentVisible ? true : false}
				ariaExpanded={contentVisible ? true : false}
				ariaControls={internalID}
			/>
			<CollapsibleContentContainer
				id={internalID}
				$contentVisible={contentVisible}
			>
				<Copy
					kind={copyKind}
				>
					{React.cloneElement(children, { contentVisible })}
					{/* {children} */}
				</Copy>
			</CollapsibleContentContainer>
		</div>
	);
};
Collapsible.propTypes = {
	/**
	 * Properties of the button. [Learn about button props](/?path=/story/core-button--playground).
	 */
	'button': PropTypes.shape({
		'size': PropTypes.oneOf(['standard', 'small']),
		'surfaceStyle': PropTypes.oneOf(['filled', 'outlined', 'transparent']),
		'contextColor': PropTypes.oneOf(['onDark', 'onLight']),
		'text': PropTypes.string,
	}),
	/**
	 * ID used internally. Can be anything as long as it's unique.
	 */
	'internalID': PropTypes.string.isRequired,
	/**
	 * Copy style for children.
	 */
	'copyKind': PropTypes.string,
	/**
	 * The content that will be initially hidden.
	 */
	'children': PropTypes.element,
};
Collapsible.defaultProps = {
	'button': {
		'size': 'small',
		'surfaceStyle': 'outlined',
		'contextColor': 'onDark',
		'text': 'Contents',
	},
	'copyKind': 'copy-container--standard',
	'internalID': 'asdf-1',
};
