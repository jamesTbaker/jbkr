import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import MOSatHomeScheduleData from './MOSatHomeSchedule.Data';
import Screen from '../../services/device';
import ScheduleWeek from '../../components/ContentGroups/Schedules/ScheduleWeek/ScheduleWeek.Render';
import FilterGroup from '../../components/ContentGroups/Filters/FilterGroup/FilterGroup.Render';
import Spinner from '../../components/Core/Spinner/Spinner';
import LoadFailure from '../../components/Core/LoadFailure/LoadFailure';

class MOSatHomeSchedule extends React.Component {
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
				startDateWeek1: null,
				endDateWeek1: null,
				startDateWeek2: null,
				endDateWeek2: null,
			},
			content: {
				daysWithProductsAll: [],
				daysWithProductsWeek1: [],
				daysWithProductsWeek2: [],
				svgsAll: [],
				channels: [],

			},
			filters: {
				ageRanges: {
					available: [],
					selected: [],
					collapsible: true,
					collapsed: true,
					expanding: false,
				},
			},
		};
		this.handleAgeRangeFilterSetting = this.handleAgeRangeFilterSetting.bind(this);
		this.handleAgeRangeCollapsibleClick = this.handleAgeRangeCollapsibleClick.bind(this);
		this.updateStateDevice = this.updateStateDevice.bind(this);
	}

	componentDidMount() {
		this.updateStateDevice();
		window.addEventListener('resize', this.updateStateDevice);
		MOSatHomeScheduleData.ReturnMOSatHomeScheduleData()
			.then((dataResult) => {
				const weeksOfDaysWithFilteredProducts =
					this.returnWeeksOfDaysWithFilteredProducts(dataResult);
				this.setState(() => ({
					data: {
						dataReady: true,
						dataFailed: false,
					},
					dates: dataResult.dates,
					content: {
						daysWithProductsAll: dataResult.content.daysWithProductsAll,
						daysWithProductsWeek1: weeksOfDaysWithFilteredProducts.content.daysWithProductsWeek1,
						daysWithProductsWeek2: weeksOfDaysWithFilteredProducts.content.daysWithProductsWeek2,
						svgsAll: dataResult.content.svgsAll,
						channels: dataResult.content.channels,
					},
					filters: {
						ageRanges: {
							available: weeksOfDaysWithFilteredProducts.filters.ageRanges.available,
							selected: weeksOfDaysWithFilteredProducts.filters.ageRanges.available,
							collapsible: true,
							collapsed: true,
						},
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

	handleAgeRangeCollapsibleClick(expandedItemsIDArray) {
		this.setState((previousState) => ({
			filters: {
				ageRanges: {
					available: previousState.filters.ageRanges.available,
					selected: previousState.filters.ageRanges.selected,
					collapsible: previousState.filters.ageRanges.collapsible,
					collapsed: !previousState.filters.ageRanges.collapsed,
					expanding: true,
				},
			},
		}));
	}

	returnDateIsInWeek({
		date,
		weekStartDate,
		weekEndDate,
	}) {
		const dateMoment = moment(date, 'YYYY-MM-DD');
		const weekStartDateMoment = moment(weekStartDate, 'YYYY-MM-DD');
		const weekEndDateMoment = moment(weekEndDate, 'YYYY-MM-DD');
		return	dateMoment.isSame(weekStartDateMoment) ||
				dateMoment.isSame(weekEndDateMoment) ||
				dateMoment.isBetween(weekStartDateMoment, weekEndDateMoment);
	}

	returnDayWithProductsFilteredByAge({
		dayWithProductsAll,
		ageRangeFilters,
	}) {
		if (
			ageRangeFilters.available.length ===
			ageRangeFilters.selected.length
		) {
			return dayWithProductsAll;
		}
		const dayWithProductsFiltered = {
			dateString: dayWithProductsAll.dateString,
			products: {
				online: {},
			},
		};
		const matchingProducts = {};
		// eslint-disable-next-line array-callback-return
		Object.keys(dayWithProductsAll.products).filter((productStartTimeKey) => {
			dayWithProductsAll.products[productStartTimeKey].productsThisTime.forEach((product) => {
				if (
					product.ageRanges &&
						product.ageRanges.ageRangeArray &&
						product.ageRanges.ageRangeArray[0]
				) {
					product.ageRanges.ageRangeArray.forEach((productAgeRange) => {
						ageRangeFilters.selected.forEach((selectedAgeRange) => {
							if (selectedAgeRange.id === productAgeRange.id) {
								if (!matchingProducts[productStartTimeKey]) {
									matchingProducts[productStartTimeKey] = {};
									matchingProducts[productStartTimeKey].startTimeFormatted =
											dayWithProductsAll.products[productStartTimeKey].startTimeFormatted;
									matchingProducts[productStartTimeKey].productsThisTime = [];
								}
								matchingProducts[productStartTimeKey].productsThisTime.push(
									product,
								);
							}
						});
					});
				}
			});
		});
		if (Object.keys(matchingProducts)[0]) {
			dayWithProductsFiltered.products = matchingProducts;
		}
		return dayWithProductsFiltered;
	}

	returnWeeksOfDaysWithFilteredProducts({
		// eslint-disable-next-line react/destructuring-assignment
		content = this.state.content,
		// eslint-disable-next-line react/destructuring-assignment
		dates = this.state.dates,
		// eslint-disable-next-line react/destructuring-assignment
		filters = this.state.filters,
	}) {
		const filterAgeRangesAvailable = [];
		const contentDaysWithProductsWeek1 = [];
		const contentDaysWithProductsWeek2 = [];
		content.daysWithProductsAll.forEach((dayWithProductsAll) => {
			if (
				this.returnDateIsInWeek({
					date: dayWithProductsAll.dateString,
					weekStartDate: dates.startDateWeek1,
					weekEndDate: dates.endDateWeek1,
				})
			) {
				if (
					dayWithProductsAll.products &&
					dayWithProductsAll.products &&
					Object.keys(dayWithProductsAll.products)[0]
				) {
					contentDaysWithProductsWeek1.push(this.returnDayWithProductsFilteredByAge({
						dayWithProductsAll,
						ageRangeFilters: filters.ageRanges,
					}));
				} else {
					contentDaysWithProductsWeek1.push(dayWithProductsAll);
				}
			}
			if (
				this.returnDateIsInWeek({
					date: dayWithProductsAll.dateString,
					weekStartDate: dates.startDateWeek2,
					weekEndDate: dates.endDateWeek2,
				})
			) {
				if (
					dayWithProductsAll.products &&
					dayWithProductsAll.products &&
					Object.keys(dayWithProductsAll.products)[0]
				) {
					contentDaysWithProductsWeek2.push(this.returnDayWithProductsFilteredByAge({
						dayWithProductsAll,
						ageRangeFilters: filters.ageRanges,
					}));
				} else {
					contentDaysWithProductsWeek2.push(dayWithProductsAll);
				}
			}
			if (
				dayWithProductsAll.products &&
				dayWithProductsAll.products &&
				Object.keys(dayWithProductsAll.products)[0]
			) {
				Object.keys(dayWithProductsAll.products).forEach((productStartTimeKey) => {
					dayWithProductsAll.products[productStartTimeKey].productsThisTime.forEach((product) => {
						if (
							product.ageRanges &&
							product.ageRanges.ageRangeArray &&
							product.ageRanges.ageRangeArray[0]
						) {
							product.ageRanges.ageRangeArray.forEach((ageRange) => {
								if (
									filterAgeRangesAvailable
										.filter((ageRangeAlreadyAvailable) => (
											ageRangeAlreadyAvailable.id === ageRange.id
										)).length === 0
								) {
									filterAgeRangesAvailable.push(ageRange);
								}
							});
						}
					});
				});
			}
		});
		filterAgeRangesAvailable.sort((a, b) => a.weight - b.weight);
		return {
			content: {
				daysWithProductsWeek1: contentDaysWithProductsWeek1,
				daysWithProductsWeek2: contentDaysWithProductsWeek2,
			},
			filters: {
				ageRanges: {
					available: filterAgeRangesAvailable,
				},
			},
		};
	}

	handleAgeRangeFilterSetting(event) {
		const { state } = this;
		const checkboxID = event.target.id;
		const checkboxChecked = event.target.checked;
		this.setState((previousState) => {
			const previousStateCopy = { ...previousState };
			if (!checkboxChecked) {
				previousStateCopy.filters.ageRanges.selected =
					state.filters.ageRanges.selected
						.filter((selectedFilter) => selectedFilter.id !== checkboxID);
			}
			if (checkboxChecked) {
				state.filters.ageRanges.available.forEach((availableFilter) => {
					if (availableFilter.id === checkboxID) {
						previousStateCopy.filters.ageRanges.selected =
							state.filters.ageRanges.selected.concat(availableFilter);
					}
				});
			}
			previousStateCopy.filters.ageRanges.expanding = false;
			const weeksOfDaysWithFilteredProducts =
				this.returnWeeksOfDaysWithFilteredProducts(
					previousStateCopy.content,
					previousStateCopy.dates,
					previousStateCopy.filters,
				);
			previousStateCopy.content.daysWithProductsWeek1 =
				weeksOfDaysWithFilteredProducts.content.daysWithProductsWeek1;
			previousStateCopy.content.daysWithProductsWeek2 =
				weeksOfDaysWithFilteredProducts.content.daysWithProductsWeek2;
			return previousStateCopy;
		});
	}

	render() {
		const { state } = this;
		if (
			state.data.dataReady &&
			!state.data.dataFailed
		) {
			return (
				<div id="mos-root--mos-at-home-schedule">
					<FilterGroup
						device={state.device}
						header={{
							level: 2,
							text: 'Filter Schedules',
						}}
						filters={
							[
								{
									type: 'ageRanges',
									header: {
										level: 3,
										text: 'Age',
										size: 'm',
										color: 'grey-23',
										padding: 2.75,
										icon: {
											color: 'aqua-6',
										},
									},
									content: {
										backgroundColor: 'bold-blue',
										padding: '1.75rem',
										width: '100%',
										color: 'white',
									},
									collapsed: state.filters.ageRanges.collapsed,
									collapseHandler: this.handleAgeRangeCollapsibleClick,
									expanding: state.filters.ageRanges.expanding,
									filterHandler: this.handleAgeRangeFilterSetting,
									available: state.filters.ageRanges.available,
									selected: state.filters.ageRanges.selected,
								},
							]
						}
						svgsAll={state.content.svgsAll}
					/>
					<ScheduleWeek
						scope="week"
						channels={state.content.channels}
						svgsAll={state.content.svgsAll}
						device={state.device}
						startDate={state.dates.startDateWeek1}
						endDate={state.dates.endDateWeek1}
						scheduleDays={state.content.daysWithProductsWeek1}
						daySections={{
							headers: true,
							subHeaders: true,
							standardItems: true,
						}}
					/>
					<ScheduleWeek
						scope="week"
						channels={state.content.channels}
						svgsAll={state.content.svgsAll}
						device={state.device}
						startDate={state.dates.startDateWeek2}
						endDate={state.dates.endDateWeek2}
						scheduleDays={state.content.daysWithProductsWeek2}
						daySections={{
							headers: true,
							subHeaders: true,
							standardItems: true,
						}}
						dayNotices={false}
					/>
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
render(<MOSatHomeSchedule />, document.getElementById('mos-at-home-schedule-mount-point'));
