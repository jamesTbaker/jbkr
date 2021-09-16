import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';

export const ProfileSkill = ({
	skill,
	visualize
}) => (
	<>
		{
			visualize &&

			<Copy kind="h5">Vis: {skill.name}</Copy>
		}
		{
			!visualize &&

			<Copy kind="h5">No Vis: {skill.name}</Copy>
		}
	</>
);
