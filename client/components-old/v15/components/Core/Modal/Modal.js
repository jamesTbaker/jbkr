/**
 * @name Modal
 * @component
 * @category Ingredients
 * @smart
 * @description Modal.
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { InitializeGA, SendGAEvent } from '../../../services/analytics';
import Style from '../../../services/styles';
import Button from '../Button/Button';
import Dimmer from '../Dimmer/Dimmer';
import HeaderText from '../Header/Header';

const ModalContainerPositioning = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: ${Style.ZIndex('modal-container-positioning')};
	animation: fadeIn ease ${Style.StandardTransitionTime().milliseconds}ms;
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const ModalContainer = styled.div`
	display: block;
	position: absolute;
	margin: 0 auto;
	padding: 6rem;
	background: linear-gradient(to bottom left, ${Style.Color({ token: 'purple-7' })}, ${Style.Color({ token: 'purple-9' })});
	z-index: ${Style.ZIndex('modal-container')};
	${({ device }) => (
		device.screen.width === 'xs' ||
		device.screen.width === 's' ||
		device.screen.width === 'm') && `
			bottom: 0;
			width: 100%;
	`}
	${({ device }) => (
		device.screen.width !== 'xs' &&
		device.screen.width !== 's' &&
		device.screen.width !== 'm') && `
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			max-width: 65rem;
		`}
`;

const HeaderTextContainer = styled.div`
	h3 {
		font-size: ${Style.FontSize('m')}rem;
	}
	color: ${Style.Color({ token: 'subtle-green' })};
`;

const Content = styled.p`
	font-size: ${Style.FontSize('s')}rem;
	color: ${Style.Color({ token: 'white' })};
	margin: 2rem 0;
`;

const CloseButtonContainer = styled.div`
	position: absolute;
	top: 1rem;
	right: 1rem;
`;

const ButtonContainer = styled.div`
	margin-right: 2rem;
	display: inline-block;
`;

const PreventButtonContainer = styled.div`
	margin-top: 1.5rem;
`;

const Modal = ({
	id,
	svgsAll,
	device,
	header,
	content,
	buttons,
	setModalClosed,
	preventFutureDisplayInLocalStorage,
	visible,
	triggerElement,
}) => {
	const [
		preventFutureRender,
		setPreventFutureRender,
	] = useState(() => {
		const storageItem = localStorage.getItem(`preventModal-${id}`);
		if (!storageItem) {
			return false;
		}
		if (moment().unix() * 1000 > JSON.parse(storageItem).expiry) {
			localStorage.removeItem(`preventModal-${id}`);
			return false;
		}
		return JSON.parse(storageItem).value === 'true';
	});

	const [
		modalVisibility,
		setModalVisibility,
	] = useState(visible);

	const handleCloseModal = () => {
		SendGAEvent('Modal', `Close Modal (${id})`, window.location.href + window.location.search);
		sessionStorage.setItem(`shownModal-${id}`, 'true');
		setModalVisibility(false);
	};

	const handlePreventFuture = () => {
		// Set to false if needing to reset localStorage (and see above)
		const storageItem = {
			value: 'true',
			expiry: moment().unix() + 1209600000, // 2 weeks in milliseconds
		};
		SendGAEvent('Modal', `Prevent Future (${id})`, window.location.href + window.location.search);
		localStorage.setItem(`preventModal-${id}`, JSON.stringify(storageItem));
		setPreventFutureRender(true);
		setModalVisibility(false);
	};

	const escFunction = (event) => {
		if (event.keyCode === 27) {
			handleCloseModal();
		}
	};

	// Initialize Google Analytics tracking
	useEffect(() => {
		InitializeGA();
	}, []);

	// Watch for mousedown event on the specified trigger(s)
	useEffect(() => {
		const triggers = document.getElementsByClassName(triggerElement);
		Array.from(triggers).forEach((trigger) => {
			trigger.addEventListener('mousedown', () => {
				setModalVisibility(!modalVisibility);
			});
		}, []);
	});

	// Watch for escape key press
	useEffect(() => {
		document.addEventListener('keydown', escFunction, false);
	}, []);

	return (
		(preventFutureRender === false &&
			modalVisibility === true &&
			sessionStorage.getItem(`shownModal-${id}`) !== 'true') ? (
				<ModalContainerPositioning>
					<ModalContainer device={device}>
						{setModalClosed ? (
							<CloseButtonContainer>
								<Button
									container={{
										height: '21rem',
										backgroundColor: 'transparent',
										borderColor: 'transparent',
										elevation: 0,
									}}
									content={{
										text: 'Close',
										padding: 0,
										icon: {
											content: 'icon-x',
											position: 'before',
											color: 'subtle-yellow',
											size: 'xs',
											verticalAlign: 'middle',
										},
										hideText: true,
									}}
									clickHandler={handleCloseModal}
									svgsAll={svgsAll}
									device={{
										screen: {
											width: 'xs',
										},
									}}
								/>
							</CloseButtonContainer>
						) :
							''}
						<HeaderTextContainer>
							<HeaderText
								level="3"
								text={header}
							/>
						</HeaderTextContainer>
						<Content>{content}</Content>
						{buttons ? buttons.map((button) => (
							<ButtonContainer
								key={button.id}
							>
								<Button
									container={{
										width: 'auto',
										backgroundColor: 'transparent',
										borderColor: 'subtle-yellow',
										elevation: 0,
									}}
									content={{
										text: button.text,
										size: 'xs',
										color: 'white',
									}}
									clickHandler={button.action === 'cancel' ? handleCloseModal : button.action}
									interactive
									device={{
										screen: {
											width: 's',
										},
									}}
								/>
							</ButtonContainer>
						)) : ''}
						{preventFutureDisplayInLocalStorage ? (
							<PreventButtonContainer>
								<Button
									container={{
										width: 'auto',
										backgroundColor: 'transparent',
										borderColor: 'transparent',
										elevation: 0,
									}}
									content={{
										text: "Close and don't show this again",
										size: 'xs',
										color: 'subtle-yellow',
										padding: 0,
										icon: {
											content: 'icon-arrow-right',
											position: 'before',
											color: 'white',
											size: 's',
											verticalAlign: 'middle',
										},
									}}
									clickHandler={handlePreventFuture}
									svgsAll={svgsAll}
									device={{
										screen: {
											width: 'xs',
										},
									}}
									clipped
								/>
							</PreventButtonContainer>
						) : ''}
					</ModalContainer>
					<Dimmer
						handler={handleCloseModal}
						visible
					/>
				</ModalContainerPositioning>
			) : ''
	);
};
Modal.propTypes = {
	id: PropTypes.string,
	header: PropTypes.string,
	content: PropTypes.string,
	buttons: PropTypes.arrayOf(PropTypes.object),
	actions: PropTypes.shape({
		setModalClosed: PropTypes.bool,
		preventFutureDisplayInLocalStorage: PropTypes.bool,
	}),
};
export default Modal;
