import React, {useEffect} from 'react';

function About() {
	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = () => {
		fetch('/api/hello').then(res => res.json()).then(data => {
			console.log(data)
		})
	}
	return (
		<div>
			About page
		</div>
	);
}

export default About;
