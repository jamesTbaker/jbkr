import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, deviceWidthQuery } from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';

const ProfileSectionTitlePreface = styled.div`
	${deviceWidthQuery.only({ 'width': 's' })} {
		margin-bottom: 1rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		margin-bottom: 1rem;
	}
`;
const ProfileSectionTitleMain = styled.div`
	> span {
		border-radius: .375rem;
		background-image: linear-gradient(
			to bottom,
			${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 39,
				'format': 'string'
			})} 0%,
			${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 39,
				'format': 'string'
			})} 100%
		);
	}
	${deviceWidthQuery.only({ 'width': 's' })} {
		line-height: 6rem;
	}
	${deviceWidthQuery.only({ 'width': 'm' })} {
		line-height: 7rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		line-height: 10rem;
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
				<ProfileSectionTitlePreface>
					<Copy
						kind="profile--section-title--preface"
					>
						{title.preface}&nbsp;
					</Copy>
				</ProfileSectionTitlePreface>
			}
			<ProfileSectionTitleMain>
				<Copy
					kind="profile--section-title--main"
				>
					{title.main}
				</Copy>
			</ProfileSectionTitleMain>
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
