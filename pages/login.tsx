import React from 'react';

function Login() {
	return (
		<div className='bg-slate-50 relative'>
			<div className='absolute w-[400px] top-1/2 left-1/2 h--[200px] rounded-lg'>
				<form action="">
					<div>
						<label htmlFor="">Email</label>
						<input type="text"/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
