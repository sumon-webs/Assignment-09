import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

export async function middleware(request) {
    const session = await auth.api.getSession({
        headers: headers()
    })

    const { pathname } = request.nextUrl;

    // protect only doctor details + dashboard
    const isProtected =
        pathname.startsWith('/doctors/') ||
        pathname.startsWith('/dashboard');

    if (isProtected && !session) {
        return NextResponse.redirect(new URL('/log-in', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/doctors/:path*'],
};