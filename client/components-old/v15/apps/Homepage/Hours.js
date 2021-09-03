import React from 'react';
import { render } from 'react-dom';
import Schedule from '../../services/schedule';
import Svgs from '../../services/svgs';
import Screen from '../../services/device';
import Icon from '../../components/Core/Icon/Icon';

class Hours extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				dataReady: false,
				dataFailed: false,
			},
			device: {
				screen: {
					width: null,
				},
			},
			hours: {},
			svgsAll: {},
		};
		this.updateStateDevice = this.updateStateDevice.bind(this);
	}

	componentDidMount() {
		this.updateStateDevice();
		window.addEventListener('resize', this.updateStateDevice);
		Schedule.ReturnTodaysScheduleData()
			.then((dataResult) => {
				this.setState(() => ({
					data: {
						dataReady: true,
						dataFailed: false,
					},
					hours: this.returnTodaysHoursData(dataResult.result),
				}));
			})
			.catch((dataError) => {
				this.setState(() => ({
					data: {
						dataReady: true,
						dataFailed: true,
					},
				}));
			});

		Svgs.ReturnSVGsData()
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

	returnTodaysHoursData(result) {
		return {
			open: result.hours.open,
			openingTimeFormatted: result.hours.openingTimeFormatted,
			closingTimeFormatted: result.hours.closingTimeFormatted,
		};
	}

	render() {
		const { state } = this;
		if (
			state.data.dataReady &&
			!state.data.dataFailed) {
			if (state.hours.open) {
				return (
					<div id="mos-root--homepage-hours">
						<Icon
							color="white"
							size="m"
							device={state.device}
							svgsAll={state.svgsAll}
							content="icon-clock"
						/>
					Today&#39;s Exhibit Halls open from&nbsp;
						{state.hours.openingTimeFormatted}
						&nbsp;&ndash;&nbsp;
						{state.hours.closingTimeFormatted}
					</div>
				);
			}
			if (!state.hours.open) {
				return (
					<div id="mos-root--homepage-hours">
						The Museum is closed today
					</div>
				);
			}
		}

		return null;
	}
}

render(<Hours />, document.getElementById('homepage-hours-mount-point'));
