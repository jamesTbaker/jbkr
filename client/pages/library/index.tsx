import styled from 'styled-components';
import { connectToDatabase } from '../../lib/mongodb';
// import Posts from '../../components/Posts/Posts';

/* eslint-disable-next-line */
export interface LibLabListProps {};

const StyledLibLabListScreen = styled.div`
	color: pink;
`;

const LibLabListScreen = (props: LibLabListProps) => (
	<StyledLibLabListScreen>
		<h2>The LibLab Screen</h2>
		<div>
			{/* <Posts posts={ReturnAllPosts()} /> */}
		</div>

	</StyledLibLabListScreen>
);

export default LibLabListScreen;

export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();
	const data = await db.collection('posts').find({}).toArray();
	const posts = JSON.parse(JSON.stringify(data));
	console.log(posts);
	return {
		props: { posts },
	};
}
