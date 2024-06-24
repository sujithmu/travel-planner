"use client";
import Link from 'next/link';
import { Button } from './ui/button';
import { LucidePlane } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const user = session?.user.email?.substring(0, session.user.email.indexOf("@"));
  return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <LucidePlane />
        </Link>
            Hello{ '        ' }{user}!
              {!session ? ( 
                  <>
                      <Button
                          className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                          onClick={(e) => {
                              e.preventDefault();
                              signIn();
                          }}
                      >
                          Sign in
                      </Button>
                  </>
              ) : (
                  <Button
                      className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                      onClick={(e) => {
                          e.preventDefault();
                          signOut();
                          router.push(process.env.__NEXTAUTH+'/sign-in')
                      }}
                  >
                      Sign out
                  </Button> 
              )}
      </div>
    </div>
  );
};

export default Navbar;