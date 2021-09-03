import React from 'react';
import { render } from 'react-dom';
import AppHeaderData from './AppHeader.Data';
import AppHeaderMain from '../../components/Sections/AppHeaderMain/AppHeaderMain';
import Screen from '../../services/device';

class AppHeader extends React.Component {
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
			svgsAll: [],
			allSections: {},
			hours: {},
		};
		this.updateStateDevice = this.updateStateDevice.bind(this);
	}

	componentDidMount() {
		this.updateStateDevice();
		window.addEventListener('resize', this.updateStateDevice);
		AppHeaderData.ReturnMainAppHeaderData()
			.then((dataResult) => {
				this.setState(() => ({
					data: {
						dataReady: true,
						dataFailed: false,
					},
					svgsAll: dataResult.svgsAll,
					allSections: dataResult.allSections,
					hours: dataResult.hours,
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

	render() {
		const { state } = this;
		if (
			state.data.dataReady &&
			!state.data.dataFailed
		) {
			return (
				<div id="mos-root--app-header-main">
					<AppHeaderMain
						device={state.device}
						svgsAll={state.svgsAll}
						allSections={state.allSections}
						hours={state.hours}
					/>
				</div>
			);
		}

		return null;
	}
}

render(<AppHeader />, document.getElementById('app-header-mount-point'));
