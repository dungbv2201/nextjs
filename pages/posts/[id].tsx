import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {Post} from "../index";
import Head from "next/head";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const responses = await fetch('https://jsonplaceholder.typicode.com/posts/'+ context?.params?.id)
	const data = await responses.json();
	return {
		props: {
			data
		}
	}
}
const PostDetail = ({data}: { data: Post}) =>{
	return(
	<>
		<Head>
			<title>My blog | {data.title}</title>
		</Head>
		<div className='container mx-auto mt-5'>
			<Link href={'/'}>
				<a className='p-2 bg-amber-300 rounded inline-block w-auto'>Post List</a>
			</Link>

			<h1 className='font-bold text-2xl'>{data.title}</h1>
			<p>
				{ data.body }
			</p>
		</div>
	</>
)
;
}

export default PostDetail;
