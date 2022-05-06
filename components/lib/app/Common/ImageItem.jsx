import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';

const ImageItemContainer = styled.div`
	img {
		border-radius: .375rem;
		overflow: hidden;
	}
`;
export const ImageItem = ({
	url,
	alternativeText,
	width,
	height,
}) => (
	<ImageItemContainer>
		<Image
			src={url}
			alt={alternativeText}
			width={width}
			height={height}
			quality={100}
		/>
	</ImageItemContainer>
);
