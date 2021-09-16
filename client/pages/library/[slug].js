import { returnContentAsProps } from '@jbkr/http-client';
import { ArticleScreen } from '@jbkr/components';

const ScreenContainer = (props) => (
	<ArticleScreen
		{...props}
	/>
);
export default ScreenContainer;
export async function getServerSideProps(context) {
	return await returnContentAsProps({
		'contentToken': 'liblab',
		'slug': context.query.slug,
	});
}
