import React from 'react';
import { render } from 'react-dom';
import schedule from '../../services/schedule';

class AppHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				dataReady: false,
				dataFailed: false,
			},
			hours: {},
		};
	}

	componentDidMount() {
		schedule.ReturnTodaysScheduleData()
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
					<div id="mos-root--section-footer">
						Today&#39;s Exhibit Halls open
						<br />
						{state.hours.openingTimeFormatted}
					&nbsp;&ndash;&nbsp;
						{state.hours.closingTimeFormatted}
					</div>
				);
			}
			if (!state.hours.open) {
				return (
					<div id="mos-root--section-footer">
						The Museum is closed today
					</div>
				);
			}
		}
		return null;
	}
}

render(<AppHeader />, document.getElementById('app-footer-mount-point'));
