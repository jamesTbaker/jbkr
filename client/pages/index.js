// import { Test } from '@jbkr/components';
import { returnContentAsProps } from '@jbkr/http-client';

const ScreenContainer = (props) => (
	<>
		<p>Inside ScreenContainer</p>
		{/* <p>{props.content}</p>
		<Test /> */}
	</>
);
export default ScreenContainer;
export async function getServerSideProps(context) {
	return await returnContentAsProps({
		'contentToken': 'profile',
	});
}
