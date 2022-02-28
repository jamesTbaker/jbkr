import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deviceWidthQuery, color, zIndexNumber } from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { ScreenTitlePrimary } from '../Common/ScreenTitlePrimary';


const MetaContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-top: 23rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: relative;
		width: 100%;
		max-width: 180rem;
		margin: 14rem auto 0;
		text-align: center;
	}
`;
const MainContentContainer = styled.main.attrs(() => {
	return {
		'id': 'main-content',
	};
})`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 0 2rem 0 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: calc(100% - 4rem);
		max-width: 150rem;
		margin: 0 auto;
		text-align: left;
	}


`;
const MetaHeader = styled.header`
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding: 15rem 0 10rem 0;
	}
`;
const MetaBody = styled.div`
	transform: translateY(6rem);
	opacity: 0;
	transition: all 1.5s .5s;
	&.animation-state--final {
		transform: translateY(0);
		opacity: 1;
	}
`;
export const Meta = ({
	title,
	mainContent,
}) => {
	const metaBodyRef = useRef();
	useEffect(() => {
		metaBodyRef.current.classList.add('animation-state--final');
	});
	return (
		<MetaContainer>
			<MainContentContainer>
				<MetaHeader>
					<ScreenTitlePrimary
						titleVisible={title}
					/>
				</MetaHeader>
				<MetaBody
					ref={metaBodyRef}
				>
					<Copy
						kind="copy-container--standard"
						htmlContent={mainContent}
					/>
				</MetaBody>
			</MainContentContainer>
		</MetaContainer>
	);
};

Meta.propTypes = {
	'title': PropTypes.string,
}
