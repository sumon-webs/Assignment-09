import { NextResponse } from 'next/server'
import { auth } from './lib/auth'

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: request.headers
    });

    const { pathname } = request.nextUrl;

    const isProtected = pathname.startsWith('/dashboard');

    if (!session && isProtected) {
        return NextResponse.redirect(new URL('/log-in', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [ '/dashboard/:path*'],
};