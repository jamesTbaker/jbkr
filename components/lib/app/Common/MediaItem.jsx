import styled from 'styled-components';
import { color } from '@jbkr/style-service';
import PropTypes from 'prop-types';
import { VideoItem } from './VideoItem';
import { ImageItem } from './ImageItem';
import { YouTubeItem } from './YouTubeItem';
import { CodeSandboxItem } from './CodeSandboxItem';
import { TwitterItem } from './TwitterItem';
import { HubLogos } from '../Hub/HubLogos';
import { HubColorPreview } from '../Hub/HubColorPreview';
import { HubPrivate } from '../Hub/HubPrivate';
import { HubContacts } from '../Hub/HubContacts';


const MediaItemContainer = styled.div``;
export const MediaItem = ({
	category,
	specs,
}) => (
	<MediaItemContainer>
		{
			category === 'image' &&
			<ImageItem
				url={specs.url}
				alternativeText={specs.alternativeText}
				width={specs.width}
				height={specs.height}
			/>
		}
		{
			category === 'video' &&
			<VideoItem
				videoURL={specs.video.url}
				videoType={specs.video.type}
				posterURL={specs.poster && specs.poster.url ?
					specs.poster.url : null}
			/>
		}
		{
			category === 'youtube' &&
			<YouTubeItem
				id={specs.id}
				title={specs.title}
			/>
		}
		{
			category === 'codesandbox' &&
			<CodeSandboxItem
				id={specs.id}
				file={specs.file}
				title={specs.title}
			/>
		}
		{
			category === 'twitter' &&
			<TwitterItem
				id={specs.id}
				title={specs.title}
				author={specs.author}
				createdDate={specs.createdDate}
				createdTime={specs.createdTime}
				stats={specs.stats}
				text={specs.text}
				media={specs.media}
			/>
		}
		{
			category === 'component' && specs === 'HubLogos' &&
			<HubLogos />
		}
		{
			category === 'component' && specs === 'HubPrivate' &&
			<HubPrivate />
		}
		{
			category === 'component' && specs === 'HubColorPreview' &&
			<HubColorPreview />
		}
		{
			category === 'component' && specs === 'HubContacts' &&
			<HubContacts />
		}
	</MediaItemContainer>
);
