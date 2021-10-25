import styled from 'styled-components';
import { deviceWidthQuery, color } from '@jbkr/style-service';
import { AppFooter } from '@jbkr/components';


const BodyEmulation = styled.div`
	/* ${deviceWidthQuery.only({ 'width': 's' })} {
		height: 812px;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		text-align: center;
		height: 1024px;
	} */
	padding-top: 4rem;
	background-color: ${color({
	'kind': 'Neutral',
	'tone': 'Finch',
	'level': 37,
	'format': 'string',
})
	};
`;

export default {
	'title': 'App / AppFooter',
	'component': AppFooter,
	'parameters': {
		'layout': 'fullscreen',
	},
};
const Template = (args) => (
	<BodyEmulation>
		<AppFooter
			{...args}
		/>
	</BodyEmulation>
);
export const General = Template.bind({});
General.args = {
	'content': '&copy; 1999&mdash;2021, James T. Baker. All Rights Reserved.',
};
