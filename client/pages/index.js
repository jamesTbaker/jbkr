/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import { connectToDatabase } from '../lib/mongodb';
import styled from 'styled-components';
import { style } from '@jbkr/style-service';


const Title = styled.h1`
	font-size: 50px;
	color: ${style.color.string(
	{ 'color': style.color.props().Accent.OnLight.Secondary.Iris },
)};
`;

export default function Home({ skills }) {
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Title>
					Welcome to
					<a href="https://nextjs.org">Next.js with MongoDB!</a>
				</Title>
				<pre>{JSON.stringify(skills)}</pre>

			</main>

		</div>
	);
}

export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();
	const data = await db.collection('skills').find({}).toArray();
	const skills = JSON.parse(JSON.stringify(data));
	// console.log(skills);
	return {
		'props': { skills },
	};
}
