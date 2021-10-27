import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, zIndexNumber, color
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { Line } from '../../..';


const ProfileSectionTitleContainer = styled.h2`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		margin: 0 0 2rem 0;
	}
`;
const ProfileSectionHeaderContainer = styled.header`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		margin-bottom: 4rem;
	}
`;

export const ProfileSectionHeader = ({ content: { hash, title }}) => (
	<ProfileSectionHeaderContainer>
		<ProfileSectionTitleContainer>
			{
				title && title.preface &&
				<Copy
					kind="profile--section-title--preface"
				>
					{title.preface}
				</Copy>
			}
			<Copy
				kind="profile--section-title--main"
			>
				{title.main}
			</Copy>
		</ProfileSectionTitleContainer>
		<Line
			width={15}
			height="2xl"
			alignment="center"
			color={{
					'kind': 'Brand',
					'tone': 'Spruce',
					'level': 1,
			}}
		/>
	</ProfileSectionHeaderContainer>
);
