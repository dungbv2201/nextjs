// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function _middleware(req: NextRequest) {
	console.log(121212)
	return new Response('About page')
}

