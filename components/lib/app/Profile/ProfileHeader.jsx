import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';

export const ProfileHeader = ({
	title,
}) => (
	<>
		<Copy
			kind="h1"
			htmlContent={title}
		/>
	</>
);
