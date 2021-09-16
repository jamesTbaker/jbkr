import React from 'react';
import { render } from 'react-dom';
import { InitializeGA, SendGAEvent } from '../../services/analytics';
import svgs from '../../services/svgs';
import Screen from '../../services/device';
import Modal from '../../components/Core/Modal/Modal';

class MOSatHomeEmailSignupCTA extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				dataReady: false,
				dataFailed: false,
			},
			renderModal: false,
			device: {
				screen: {
					width: null,
				},
			},
		};
		this.updateStateDevice = this.updateStateDevice.bind(this);
		this.updateStateVisibility = this.updateStateVisibility.bind(this);
	}

	componentDidMount() {
		InitializeGA();
		this.updateStateDevice();
		window.addEventListener('resize', this.updateStateDevice);
		this.updateStateVisibility();
		window.addEventListener('scroll', this.updateStateVisibility);

		svgs.ReturnSVGsData()
			.then((dataResult) => {
				this.setState(() => ({
					data: {
						dataReady: true,
						dataFailed: false,
					},
					svgsAll: dataResult.svgsAll,
				}));
			})
			.catch(() => {
				this.setState(() => ({
					data: {
						dataReady: true,
						dataFailed: true,
					},
				}));
			});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateStateDevice);
		window.removeEventListener('scroll', this.updateStateVisibility);
	}

	updateStateDevice() {
		this.setState({
			device: {
				screen: {
					width: Screen.ReturnScreenWidthToken(window.innerWidth),
				},
			},
		});
	}

	updateStateVisibility() {
		const scrollPastElementToWatch = document.getElementById('explore-page-venue-cards');
		if (scrollPastElementToWatch.offsetTop +
			scrollPastElementToWatch.scrollHeight
			< window.scrollY) {
			this.setState({
				renderModal: true,
			});
		}
	}

	handleModalButtonSignupClick() {
		SendGAEvent('Modal', 'Modal Signup (mos-at-home-email-signup)', window.location.href + window.location.search);
		window.location = '/email-signup-mos-at-home';
	}

	render() {
		const { state } = this;
		let modal;
		if (state.renderModal) {
			modal = (
				<Modal
					id="mos-at-home-email-signup"
					svgsAll={state.svgsAll}
					device={state.device}
					content="Let us bring the Museum to you! Sign up for our #MOSatHome updates."
					buttons={[
						{
							id: 'sign-up',
							text: 'Sign Up',
							action: this.handleModalButtonSignupClick,
						},
						{
							id: 'cancel',
							text: 'Maybe Later',
							action: 'cancel',
						},
					]}
					setModalClosed={() => true}
					preventFutureDisplayInLocalStorage={() => true}
					visible={() => true}
				/>
			);
		}
		if (
			state.data.dataReady &&
			!state.data.dataFailed
		) {
			return (
				<div>
					{modal}
				</div>
			);
		}
		return null;
	}
}
render(<MOSatHomeEmailSignupCTA />, document.getElementById('app-mount-point-mos-at-home-email-signup-cta'));
