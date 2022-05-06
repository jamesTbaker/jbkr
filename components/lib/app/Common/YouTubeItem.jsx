import styled from 'styled-components';
import PropTypes from 'prop-types';

const YouTubeItemContainer = styled.div`
	position: relative;
	max-width: 100%;
	height: 0;
	overflow: hidden;
	padding-bottom: 56.25%;
	iframe,
	object,
	embed {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: .375rem;
		overflow: hidden;
	}
`;
export const YouTubeItem = ({
	id,
	title,
}) => (
	<YouTubeItemContainer>
		<iframe
			src={`https://www.youtube.com/embed/${id}`}
			title={title}
			frameBorder="0"
			allowFullScreen
		></iframe>
	</YouTubeItemContainer>
);
