import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../core/Button/Button';
import { deviceWidthQuery } from '@jbkr/style-service';

const CodeSandboxItemContainer = styled.div`
`;
const CodeEmbedContainer = styled.figure`
	${deviceWidthQuery.only({ 'width': 's' })} {
		display: none;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		margin: 0 0 3rem;
	}
`;
const CodeEmbedIframe = styled.iframe`
	width: 100%;
	height: 62rem;
	border: 0;
	border-radius: .375rem;
	overflow:hidden;
	margin-bottom: 1rem;
`;
const CodeEditButtonContainer = styled.div`
	${deviceWidthQuery.only({ 'width': 's' })} {
		margin: 0 0 3rem;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: none;
	}
`;
export const CodeSandboxItem = ({
	id,
	file,
	title,
}) => {
	let constructedURL = `https://codesandbox.io/embed/${id}?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&hidedevtools=1`;
	if (file) {
		constructedURL += `&module=${encodeURIComponent(file)}`;
	} else {
		constructedURL += '&view=preview';
	}
	return (
		<CodeSandboxItemContainer>
			<CodeEmbedContainer>
				<CodeEmbedIframe
					src={constructedURL}
					title={title}
					allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
					sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
				/>
			</CodeEmbedContainer>
			<CodeEditButtonContainer>
				<Button
					size="standard"
					surfaceStyle="filled"
					contextColor="onDark"
					text="Edit on CodeSandbox"
					iconAfter="open-new-tab"
					url={constructedURL}
				/>
			</CodeEditButtonContainer>
		</CodeSandboxItemContainer>
	)
};
