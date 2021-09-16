import { returnContentAsProps } from '@jbkr/http-client';
import { ProfileScreen } from '@jbkr/components';


const ScreenContainer = (props) => (
	<ProfileScreen
		{...props}
	/>
);
export default ScreenContainer;
export async function getServerSideProps() {
	return await returnContentAsProps({
		'contentToken': 'profile',
	});
}
