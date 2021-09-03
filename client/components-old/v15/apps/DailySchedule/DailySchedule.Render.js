import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import DailyScheduleData from './DailySchedule.Data';
import Screen from '../../services/device';
import Spinner from '../../components/Core/Spinner/Spinner';
import LoadFailure from '../../components/Core/LoadFailure/LoadFailure';
import ScheduleHeader from '../../components/ContentGroups/Schedules/ScheduleHeader/ScheduleHeader.Render';
import ScheduleDay from '../../components/ContentGroups/Schedules/ScheduleDay/ScheduleDay.Render';

class DailySchedule extends React.Component {
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
			dates: {
				today: null,
				dateUsed: null,
				dateUsedIsToday: false,
			},
			header: {
				controls: {
					datePicker: {
						collapsible: true,
						collapsed: false,
						expanding: false,
					},
				},
			},
			content: {},
		};
		this.handleDatePicking = this.handleDatePicking.bind(this);
		this.handleDatePickerCollapsibleClick = this.handleDatePickerCollapsibleClick.bind(this);
		this.updateStateDevice = this.updateStateDevice.bind(this);
	}

	componentDidMount() {
		this.updateStateDevice();
		window.addEventListener('resize', this.updateStateDevice);
		DailyScheduleData.ReturnDailyScheduleData()
			.then((dataResult) => {
				this.setState(() => ({
					data: {
						dataReady: true,
						dataFailed: false,
					},
					dates: dataResult.dates,
					content: {
						daysWithProductsAll: this.returnSelectedProductsDataForDay(
							dataResult.content,
							true,
						),
						svgsAll: dataResult.content.svgsAll,
						venues: dataResult.content.venues,
					},
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

	handleDatePickerCollapsibleClick() {
		this.setState((previousState) => ({
			header: {
				controls: {
					datePicker: {
						collapsible: previousState.header.controls.datePicker.collapsible,
						collapsed: !previousState.header.controls.datePicker.collapsed,
						expanding: true,
					},
				},
			},
		}));
	}

	handleDatePicking(incomingDate) {
		DailyScheduleData.ReturnDailyScheduleData(incomingDate)
			.then((dataResult) => {
				this.setState((previousState) => ({
					data: {
						dataReady: true,
						dataFailed: false,
					},
					dates: {
						today: previousState.dates.today,
						dateUsed: incomingDate,
						dateUsedIsToday: incomingDate.isSame(previousState.dates.today, 'day'),
					},
					content: {
						daysWithProductsAll: this.returnSelectedProductsDataForDay(
							dataResult.content,
							incomingDate.isSame(previousState.dates.today, 'day'),
						),
						svgsAll: dataResult.content.svgsAll,
						venues: dataResult.content.venues,
					},
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

	returnSelectedProductsDataForDay(content, dateUsedIsToday) {
		// if there is a day
		if (
			content &&
			content.daysWithProductsAll &&
			content.daysWithProductsAll[0]
		) {
			// set up value to return, using incoming hours and date string
			const returnValue = [{
				dateString: content.daysWithProductsAll[0].dateString,
				hours: content.daysWithProductsAll[0].hours,
			}];
			// if there are onsite products
			if (
				content.daysWithProductsAll[0].products &&
				content.daysWithProductsAll[0].products.onsite
			) {
				// set up container with everything but standard products
				returnValue[0].products = {
					type: 'onsite',
					summarizedVenues:
						content.daysWithProductsAll[0].products.onsite.summarizedVenues,
				};
				// if the date used is not today
				if (!dateUsedIsToday) {
					// use all of the standard products for the day
					returnValue[0].products.standardProducts =
						content.daysWithProductsAll[0].products.onsite.standardProducts;
					// if the date used is today
				} else {
					// only keep the products that haven't already ended
					// set up container
					const standardProductsThisDay = {};
					// for each time slot object in onsite standard products
					Object.keys(content.daysWithProductsAll[0].products.onsite.standardProducts)
						.forEach((timeSlotKey) => {
							// set up a container
							const productsThisTime = [];
							// for every product in this time slot
							content.daysWithProductsAll[0].products.onsite
								.standardProducts[timeSlotKey].productsThisTime
								.forEach((product) => {
									// if the product's end time is after not before this minute
									if (
										moment(
											`${moment().format('YYYY-MM-DD')}T${product.endTime}:00`,
										).isSameOrAfter(moment(), 'minute')
									) {
										// add this product to productsThisTime
										productsThisTime.push(product);
									}
								});
							// if there are products for this time slot
							if (productsThisTime[0]) {
								// add this time slot to standard products for this day
								standardProductsThisDay[timeSlotKey] = {
									startTimeFormatted: content.daysWithProductsAll[0].products
										.onsite.standardProducts[timeSlotKey].startTimeFormatted,
									productsThisTime,
								};
							}
						});
					// use the accumulated standard products this day
					returnValue[0].products.standardProducts = standardProductsThisDay;
				}
				// if there are no onsite products but there are online products
			} else if (
				content.daysWithProductsAll[0].products &&
				content.daysWithProductsAll[0].products.online
			) {
				// add them to return value with a type indicator
				returnValue[0].products = {
					type: 'online',
					standardProducts:
						content.daysWithProductsAll[0].products.online,
				};
			}
			// return the return value
			return returnValue;
		}
		// otherwise, return null
		return null;
	}

	render() {
		const { state } = this;
		// const Container = styled.p`
		// 	font-size: ${({ device }) => (`${Style.FontSize('xs', device.screen.width)}rem`)};
		// `;
		if (
			state.data.dataReady &&
			!state.data.dataFailed
		) {
			return (
				<div id="mos-root--daily-schedule">
					{
						state.dates && (
							<>
								<ScheduleHeader
									scope="day"
									device={state.device}
									svgsAll={state.content.svgsAll}
									dates={{
										today: state.dates.today,
										startDate: state.dates.dateUsed,
										dateUsedIsToday: state.dates.dateUsedIsToday,
									}}
									controls={{
										datePicker: {
											scope: {
												selectionType: 'single',
												quantityMonthsInView: 1,
												selectableDaysLength: 90,
												selectableDaysStartDate: state.dates.today,
											},
											datePickHandler: this.handleDatePicking,
										},
										printButton: ['m', 'l', 'xl'],
									}}
								/>
								{
									state.content && state.content.daysWithProductsAll && (
										<ScheduleDay
											scope="day"
											device={state.device}
											dates={state.dates}
											hours={state.content.daysWithProductsAll[0].hours}
											products={state.content.daysWithProductsAll[0].products}
											svgsAll={state.content.svgsAll}
											venues={state.content.venues}
											sections={{
												banner: true,
												ongoingItems: true,
												standardItems: true,
											}}
											notices
										/>
									)
								}
							</>
						)
					}
				</div>
			);
		} if (
			state.data.dataReady &&
			state.data.dataFailed
		) {
			return (
				<LoadFailure
					device={state.device}
				/>
			);
		}
		return <Spinner />;
	}
}
render(<DailySchedule />, document.getElementById('app-mount-point'));
