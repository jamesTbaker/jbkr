import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { ContextColorKey } from '@jbkr/models-react';
import { zIndexNumber } from '@jbkr/style-service';
import { Button } from '../../core/Button/Button';
import { Copy } from '../Copy/Copy';

const CollapsibleContentContainer = styled.div`
	height: 0;
	overflow: hidden;
	transition: height .75s;
	z-index: ${zIndexNumber().compressedTableOfContentsContainer};
	${({ $contentVisible }) => $contentVisible && css`
		height: 100%;
	`}
`;
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
	const handleChildClick = () => {
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
					{React.cloneElement(children, {
						contentVisible,
						'clickHandler': handleChildClick,
					})}
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
		'contextColor': ContextColorKey,
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
