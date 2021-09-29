import { returnContentAsProps } from '@jbkr/http-client';
import { ProfileScreen } from '@jbkr/components';


const ScreenContainer = (props) => {
	if (props.error) {
		return (<></>);
	} else {
		return (
			<ProfileScreen
				{...props}
			/>
		);
	}
};
export default ScreenContainer;
export async function getServerSideProps() {
	return await returnContentAsProps({
		'contentToken': 'profile',
	});
}
