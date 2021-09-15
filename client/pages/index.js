import { Test } from '@jbkr/components';


const ScreenContainer = (props) => (
	<>
		<p>Inside ScreenContainer</p>
		<p>{props.content}</p>
	</>
);
export default ScreenContainer;
export async function getServerSideProps(context) {
	const response = await fetch('https://biytkgyeaf.execute-api.us-east-1.amazonaws.com/prod/content/client/profile', {
		'headers': {
			'Authorization': `Bearer ${process.env.simpleAuthKey}`,
		},
	});
	const json = await response.json();
	return {
		'props': {
			'content': 'hereknae',
			'data': json,
		},
	};
}
