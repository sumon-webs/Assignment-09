import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const pathname = request.nextUrl.pathname;

    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        if (pathname === '/all-appointments') {
            return NextResponse.redirect(new URL('/log-in', request.url))
        }
    }
    return NextResponse.next()

}



export const config = {
    matcher: ['/all-apointments/:path*', '/dashboard'],
}