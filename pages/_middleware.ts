// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
	return new Response('Hello dádasd!');
	// const basicAuth = req.headers.get('authorization')
	// if (basicAuth) {
	// 	const auth = basicAuth.split(' ')[1]
	// 	const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')
	// 	if (user === 'mydmin' && pwd === 'mypassword') {
	// 		return NextResponse.next()
	// 	}
	// }
	// return new Response('Auth required', {
	// 	status: 401,
	// 	headers: {
	// 		'WWW-Authenticate': 'Basic realm="Secure Area"',
	// 	},
	// })
}

export const config = {
	matcher: '/',
}
