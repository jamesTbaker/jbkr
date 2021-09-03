import React from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import FilterGroupHeader from '../FilterGroupHeader/FilterGroupHeader.Render';
import Filter from '../Filter/Filter.Render';

const FilterGroupContainer = styled.div`
	${(props) => !props.device.screen.width.match(/^(s|xs)$/) && `
		display: grid;
		grid-template-columns:	62.5rem 43.75rem;
		grid-template-areas:	"filterGroupHeader ageRanges"
	`}
`;

const FilterGroup = ({
	device,
	header,
	filters,
	svgsAll,
}) => (
	<FilterGroupContainer
		device={device}
	>
		<FilterGroupHeader
			device={device}
			header={header}
		/>
		{
			filters.map((filterOptions) => (
				<Filter
					device={device}
					options={filterOptions}
					key={uuid()}
					svgsAll={svgsAll}
					dimmer={false}
				/>
			))
		}
	</FilterGroupContainer>
);

export default FilterGroup;
