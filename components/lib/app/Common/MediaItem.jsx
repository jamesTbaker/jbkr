import styled from 'styled-components';
import { color } from '@jbkr/style-service';
import PropTypes from 'prop-types';
import { VideoItem } from './VideoItem';
import { ImageItem } from './ImageItem';
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
			(category === 'video' || category === 'youtube') &&
			<VideoItem
				videoURL={specs.video.url}
				videoType={specs.video.type}
				posterURL={specs.video.poster && specs.video.poster.url ?
					specs.video.poster.url : null}
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
				url={specs.url}
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
