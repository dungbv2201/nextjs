import React from 'react';
import {Post} from "../../pages";
import Link from "next/link";

function Card({title, body, id}: Post) {
	return (
		<div className='p-4 rounded-lg bg-slate-100 grid-cols-1'>
			<h4 className='font-medium text-2xl text-blue-500 underline hover:text-blue-700'>
				<Link href={'/posts/'+id} >
					{ title}
				</Link>
			</h4>
			<p>{body}</p>
		</div>
	);
}

export default Card;
