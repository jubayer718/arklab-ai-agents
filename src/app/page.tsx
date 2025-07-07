'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from './components/ui/button'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
    {session ? (
      <>
        <p className='text-xl font-bold'>Welcome, {session.user?.name}</p>
        <Button onClick={() => signOut()}>Logout</Button>
      </>
    ) : (
      <Button onClick={() => signIn('google',{ callbackUrl: '/agents' })}>Login with Google</Button>
    )}
  </div>
  )
}
