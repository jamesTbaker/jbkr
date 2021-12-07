/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import Image from 'next/image';
import { VideoItem } from './VideoItem';
import { HubLogotype } from '../Hub/HubLogotype';
import { HubColorPreview } from '../Hub/HubColorPreview';
import { HubPrivate } from '../Hub/HubPrivate';
import { HubContacts } from '../Hub/HubContacts';


const MediaItemContainer = styled.div``;

export const MediaItem = ({
	type,
	specs,
}) => (
	<MediaItemContainer>
		{
			['webp', 'png', 'jpeg', 'gif'].includes(type) &&
			<Image
				src={specs.url}
				alt={specs.alternativeText}
				width={specs.width}
				height={specs.height}
				quality={100}
			/>
		}
		{
			/* ['webm', 'mp4'].includes(type) &&
			<VideoItem
				video={{
					'url': specs.url,
					'alternativeText': specs.alternativeText,
					'light': true,
				}}
			/> */
		}
		{

			/* ['webm', 'mp4'].includes(type) &&
			<VideoItem
				options={{
					// 'autoplay': true,
					'controls': true,
					'responsive': true,
					'fluid': true,
					'sources': [{
						'src': specs.url,
						'type': 'video/mp4'
					}]
				}}
			/> */
		}
		{
			type === 'component' && specs === 'HubLogos' &&
			<HubLogotype />
		}
		{
			type === 'component' && specs === 'HubPrivate' &&
			<HubPrivate />
		}
		{
			type === 'component' && specs === 'HubColorPreview' &&
			<HubColorPreview />
		}
		{
			/* type === 'component' && specs === 'HubContacts' &&
			<HubContacts /> */
		}
	</MediaItemContainer>
);
