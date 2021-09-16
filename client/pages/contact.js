import { returnContentAsProps } from '@jbkr/http-client';
import { ContactScreen } from '@jbkr/components';


const ScreenContainer = (props) => (
	<ContactScreen
		{...props}
	/>
);
export default ScreenContainer;
export async function getServerSideProps() {
	return await returnContentAsProps({
		'contentToken': 'contact',
	});
}
