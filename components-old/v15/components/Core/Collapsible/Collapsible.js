/**
 * @name Collapsible
 * @component
 * @category Ingredients
 * @smart
 * @description Collapsible.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import Transition from 'react-transition-group/Transition';
import Button from '../Button/Button';
import Dimmer from '../Dimmer/Dimmer';
import Style from '../../../services/styles';

const defaultStyle = {
	transition: `all ${Style.StandardTransitionTime()}ms ease-in-out`,
	opacity: 0,
	height: 0,
};
const transitionStyles = {
	entering: { opacity: 0, height: 0, display: 'block' },
	entered: { opacity: 1, height: 'auto' },
	exiting: { opacity: 1, height: 'auto' },
	exited: { opacity: 0, height: 0, display: 'none' },
};
const CollapsibleContainer = styled.div`
	position: relative;
`;
const CollapsibleButtonContainer = styled.div`
	display: flex;
	${({ button: { position } }) => (position && position === 'right' && 'justify-content: flex-end;')};
`;
const CollapsibleBodyContainer = styled.div`
	${({ body: { backgroundColor } }) => (backgroundColor && `background-color: ${Style.Color({ token: backgroundColor })};`)};
	${({ body, device }) => body.overlay &&
		(
			body.overlay.screenWidths === 'all' ||
			body.overlay.screenWidths.includes(device.screen.width)
		) && `
			position: absolute;
			${body.overlay.position}: 0;
			z-index: ${Style.ZIndex('collapsible-body-container')};
			box-shadow: ${Style.Elevation('ux-l-16')};
			width: ${body.width};
			color: ${Style.Color({ token: body.color })};
			padding: ${body.padding}
	`}
`;
const Collapsible = ({
	button,
	body,
	svgsAll,
	children,
	callBack,
	interactive,
	device,
	dimmer,
}) => {
	const buttonID = nanoid();
	const contentID = nanoid();
	const [collapsed, setCollapsed] = useState(true);
	const [iconTransform, setIconTransform] = useState();
	const HandleButtonClick = () => {
		callBack(false);
		setCollapsed(!collapsed);
		setIconTransform(collapsed ? 'rotate(90)' : '');
	};
	const childrenWithProps = React.Children.map(children, (child) => {
		const props = { callBack: HandleButtonClick };
		if (React.isValidElement(child)) {
			return React.cloneElement(child, props);
		}
		return child;
	});
	return (
		<div>
			<CollapsibleContainer
				body={body}
				device={device}
			>
				<CollapsibleButtonContainer
					button={{
						position: (button.position || Collapsible.defaultProps.button.position),
					}}
				>
					<Button
						container={{
							elevation: button.elevation,
							attributes: {
								id: buttonID,
								'aria-expanded': !collapsed,
								'aria-controls': contentID,
							},
							width: button.width,
							zIndex: Style.ZIndex('content-dimmer-toggle'),
							backgroundColor: button.backgroundColor,
						}}
						content={{
							text: button.content.text,
							size: button.content.size,
							color: button.content.color,
							padding: button.padding,
							icon: {
								position: 'before',
								content: 'icon-chevron-right',
								color: button.content.icon ? button.content.icon.color : '',
								transform: iconTransform,
							},
						}}
						svgsAll={svgsAll}
						clickHandler={HandleButtonClick}
						interactive={interactive}
						device={{
							screen: {
								width: 's',
							},
						}}
					/>
				</CollapsibleButtonContainer>
				<Transition
					in={!collapsed}
					timeout={Style.StandardTransitionTime()}
				>
					{(state) => (
						<CollapsibleBodyContainer
							body={body}
							id={contentID}
							aria-labelledby={buttonID}
							aria-hidden={collapsed}
							style={{
								...defaultStyle,
								...transitionStyles[state],
							}}
							device={device}
						>
							{childrenWithProps}
						</CollapsibleBodyContainer>
					)}
				</Transition>
			</CollapsibleContainer>
			{dimmer === true && (
				<Dimmer
					handler={HandleButtonClick}
					visible={!collapsed}
				/>
			)}
		</div>
	);
};
Collapsible.propTypes = {
	button: PropTypes.shape({
		width: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
		]),
		position: PropTypes.string,
		content: PropTypes.shape({
			text: PropTypes.string.isRequired,
			size: PropTypes.string,
			color: PropTypes.string,
			icon: PropTypes.shape({
				color: PropTypes.string,
			}),
		}),
		backgroundColor: PropTypes.string,
	}),
	body: PropTypes.shape({
		overlay: PropTypes.shape({
			position: PropTypes.string,
			screenWidths: PropTypes.oneOfType([
				PropTypes.oneOf(['all']),
				PropTypes.arrayOf(PropTypes.string),
			]),
			width: PropTypes.number,
			height: PropTypes.number,
		}),
		backgroundColor: PropTypes.string,
	}),
	callBack: PropTypes.func,
};
Collapsible.defaultProps = {
	body: {
		overlay: {
			position: 'left',
		},
	},
	button: {
		position: 'left',
	},
};

export default Collapsible;
