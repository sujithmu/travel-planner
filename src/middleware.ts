import { NextRequest, NextResponse } from "next/server"

export default async function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname) {
    // let currentUser = request.cookies

    // csrd token wil be available if the user is logged in
    const token = request.cookies.get('next-auth.session-token')?.value

    // If the user is not logged in token will be empty and the application should redirect to sign in page
    if(!token) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  
    return NextResponse.next();
  }
}
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  matcher: ["/trip-planner"]
};