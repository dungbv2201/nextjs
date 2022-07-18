import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface Character {
	id: number;
	name: string;
	image: string;
	gender: string;
	status: string;
}

interface ICha {
	info?: Record<string, any>;
	results?: Array<Record<string, any>>
}
const url = 'https://rickandmortyapi.com/api/character';
export const getServerSideProps = async () => {
	const res = await fetch('https://rickandmortyapi.com/api/character');
	const characters:ICha  = await res.json();
	return {
		props: {
			characters: characters?.results
		}
	}
}

const Character: React.FC<{characters: Character[]}> = ({characters}) => {
	return (
		<div className='container mx-auto mt-5 grid grid-cols-4 gap-4'>
			{characters.map((character) => (
				<div className={'border border-slate-200 rounded flex'}>
					<Image
						src={character.image}
						width={100}
						height={100}
						className='rounded object-cover min-w-[100]'
					/>
					<ul className='p-2 text-gray-500'>
						<li>Name: { character.name }</li>
						<li>Gender: { character.gender }</li>
						<li>Status: { character.status }</li>
						<li>
							<span className='text-sky-600 underline'>
								<Link href={url+'/'+character.id}>
								Detail
							</Link>
							</span>
						</li>
					</ul>
				</div>
			))}
		</div>
	);
}

export default Character;
