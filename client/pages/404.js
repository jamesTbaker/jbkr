import { returnContentAsProps } from '@jbkr/http-client';
import { FourOhFourScreen } from '@jbkr/components';


const ScreenContainer = (props) => {
	if (props.error) {
		return (<></>);
	} else {
		return (
			<FourOhFourScreen
				{...props}
			/>
		);
	}
};
export default ScreenContainer;
export async function getStaticProps() {
	return await returnContentAsProps({
		'contentToken': 'fourohfour',
	});
}
