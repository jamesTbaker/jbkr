import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, deviceWidthQuery } from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { Line } from '../../..';


const ProfileSectionTitle = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
	> span {
		line-height: 14rem;
		margin-top: 2rem;
		border-radius: .375rem;
		background-image: linear-gradient(
			to bottom,
			${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 31,
				'format': 'string'
			})} 0%,
			${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 31,
				'format': 'string'
			})} 100%
		);
	}
`;
const ProfileSectionTitleContainer = styled.h2`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin: 0 0 1rem;
		scroll-margin-top: 30rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		margin: 0;
		scroll-margin-top: 21rem;
	}
`;
const ProfileSectionHeaderContainer = styled.header`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-bottom: 3rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		margin-bottom: 4rem;
	}
`;
export const ProfileSectionHeader = ({
	content: {
		hash,
		title,
	}
}) => (
	<ProfileSectionHeaderContainer>
		<ProfileSectionTitleContainer
			id={hash}
		>
			{
				title && title.preface &&
				<Copy
					kind="profile--section-title--preface"
				>
					{title.preface}&nbsp;
				</Copy>
			}
			<ProfileSectionTitle>
				<Copy
					kind="profile--section-title--main"
				>
					{title.main}
				</Copy>
			</ProfileSectionTitle>
		</ProfileSectionTitleContainer>
	</ProfileSectionHeaderContainer>
);
ProfileSectionHeader.propTypes = {
	'content': PropTypes.shape({
		'hash': PropTypes.string,
		'title': PropTypes.shape({
			'main': PropTypes.string,
			'preface': PropTypes.string,
		}),
	}),
}
