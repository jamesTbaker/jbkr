import { returnContentAsProps } from '@jbkr/http-client';
import { MetaScreen } from '@jbkr/components';


const ScreenContainer = (props) => {
	if (props.error) {
		return (<></>);
	} else {
		return (
			<MetaScreen
				{...props}
			/>
		);
	}
};
export default ScreenContainer;
export async function getServerSideProps() {
	return await returnContentAsProps({
		'contentToken': 'meta',
	});
}
