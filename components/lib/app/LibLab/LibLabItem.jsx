/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, zIndexNumber
} from '@jbkr/style-service';
import { MediaItem } from '../Media/MediaItem';
import { Copy } from '../../core/Copy/Copy';
import Link from 'next/link';

const LibLabItemContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		background-color: darkslateblue;
		${
			({ $type }) => {
				if ($type === 'top') {
					return `
						margin-top: 4rem;
						background-color: #653d8b;
					`;
				}
				if ($type === 'featured') {
					return `
						background-color: #3d8b64;
					`;
				}
				if ($type === 'standard') {
					return `
						background-color: #8b6c3d;
					`;
				}
			}
		}
	}
`;

export const LibLabItem = ({
	type,
	content,
}) => (
	<LibLabItemContainer
		$type={type}
	>
		{content.title}
	</LibLabItemContainer>
);
