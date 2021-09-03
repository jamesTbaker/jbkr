import React, { useState } from 'react';
import styled from 'styled-components';
import Collapsible from '../../../Core/Collapsible/Collapsible';
import FilterAgeRanges from '../FilterAgeRanges/FilterAgeRanges.Render';
import Style from '../../../../services/styles';

const FilterContainer = styled.div`
	${(props) => !props.device.screen.width.match(/^(s|xs)$/) && `
		grid-area: props.filterType;
		border: ${Style.Color({ token: 'bold-pink' })};
		position: relative;
	`}
`;

const ReturnCollapsibleComponentPosition = ({ screen: { width } }) => (
	width === 'xs' || width === 's' ? 'left' : 'right'
);

const Filter = ({
	device,
	options,
	svgsAll,
	dimmer,
}) => {
	const [collapsed, setCollapsed] = useState(true);
	return (
		<FilterContainer
			device={device}
			filterType={options.type}
		>
			<>
				<Collapsible
					button={{
						elevation: 0,
						position: ReturnCollapsibleComponentPosition(device),
						width: '100%',
						content: options.header,
						backgroundColor: 'grey-6',
						padding: options.header.padding,
					}}
					body={
						{
							...options.content,
							overlay: {
								position: ReturnCollapsibleComponentPosition(device),
								screenWidths: ['s', 'm', 'l', 'xl'],
							},
						}
					}
					svgsAll={svgsAll}
					callBack={setCollapsed}
					device={device}
					dimmer={dimmer}
				>
					<FilterAgeRanges
						device={device}
						options={options}
					/>
				</Collapsible>
			</>
		</FilterContainer>
	);
};

export default Filter;
