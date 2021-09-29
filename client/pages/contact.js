import { returnContentAsProps } from '@jbkr/http-client';
import { ContactScreen } from '@jbkr/components';


const ScreenContainer = (props) => {
	if (props.error) {
		return (<></>);
	} else {
		return (
			<ContactScreen
				{...props}
			/>
		);
	}
};
export default ScreenContainer;
export async function getServerSideProps() {
	return await returnContentAsProps({
		'contentToken': 'contact',
	});
}
