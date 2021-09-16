import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { ProfileSkill } from './ProfileSkill';

export const ProfileSkills = ({
	skills,
}) => (
	<>
		<Copy kind="h2">Skills</Copy>
		<Copy kind="h3">Technical Skills</Copy>
		{
			skills.technical.featured && skills.technical.featured[0] &&

			<>
				<Copy kind="h4">Featured</Copy>
				{
					skills.technical.featured.map((skill) =>
						<ProfileSkill
							key={skill.key}
							skill={skill}
							visualize
						/>
					)
				}
			</>
		}
		{
			skills.technical.standard && skills.technical.standard[0] &&

			<>
				<Copy kind="h4">Standard</Copy>
				{
					skills.technical.standard.map((skill) =>
						<ProfileSkill
							key={skill.key}
							skill={skill}
							visualize
						/>
					)
				}
			</>
		}
		<Copy kind="h3">Business Skills</Copy>
		{
			skills.business.featured && skills.business.featured[0] &&

			<>
				<Copy kind="h4">Featured</Copy>
				{
					skills.business.featured.map((skill) =>
						<ProfileSkill
							key={skill.key}
							skill={skill}
						/>
					)
				}
			</>
		}
		{
			skills.business.standard && skills.business.standard[0] &&

			<>
				<Copy kind="h4">Standard</Copy>
				{
					skills.business.standard.map((skill) =>
						<ProfileSkill
							key={skill.key}
							skill={skill}
						/>
					)
				}
			</>
		}
		<Copy kind="h3">Design / Engineering Skills</Copy>
		{
			skills.design.featured && skills.design.featured[0] &&

			<>
				<Copy kind="h4">Featured</Copy>
				{
					skills.design.featured.map((skill) =>
						<ProfileSkill
							key={skill.key}
							skill={skill}
							visualize
						/>
					)
				}
			</>
		}
		{
			skills.design.standard && skills.design.standard[0] &&

			<>
				<Copy kind="h4">Standard</Copy>
				{
					skills.design.standard.map((skill) =>
						<ProfileSkill
							key={skill.key}
							skill={skill}
							visualize
						/>
					)
				}
			</>
		}
	</>
);
