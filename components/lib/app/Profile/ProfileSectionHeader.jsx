import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deviceWidthQuery } from '@jbkr/style-service';
import { ScreenTitleSecondary } from '../Common/ScreenTitleSecondary';


const ProfileSectionTitleContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin: 0 0 1rem;
		scroll-margin-top: 30rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		margin: 0;
		scroll-margin-top: 29rem;
	}
`;
const ProfileSectionHeaderContainer = styled.header`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-bottom: 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		margin-bottom: 3rem;
	}
`;
export const ProfileSectionHeader = ({
	content: {
		hash,
		title,
	},
	viewed,
}) => (
	<ProfileSectionHeaderContainer>
		<ProfileSectionTitleContainer
			id={hash}
			viewed={viewed}
		>
			<ScreenTitleSecondary
				use="profileSectionTitle"
				title={title}
			/>
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
