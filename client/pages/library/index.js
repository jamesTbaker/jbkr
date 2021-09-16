import { returnContentAsProps } from '@jbkr/http-client';
import { LibLabScreen } from '@jbkr/components';

const ScreenContainer = (props) => (
	<LibLabScreen
		{...props}
	/>
);
export default ScreenContainer;
export async function getServerSideProps() {
	return await returnContentAsProps({
		'contentToken': 'liblab',
	});
}
