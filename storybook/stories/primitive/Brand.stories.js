import styled from 'styled-components';
import { Brand } from '@jbkr/components';

const BrandContainer = styled.span`
	display: block;
	height: 20rem;
`;
export default {
	'title': 'Primitive / Brand',
	'component': Brand,
};
const Template = (args) => (
	<BrandContainer>
		<Brand
			{...args}
		/>
	</BrandContainer>
);
export const General = Template.bind({});
General.args = {};
