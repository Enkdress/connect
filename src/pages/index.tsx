import Feed from '@/components/feed'
import Landing from '@/components/landing'
import { type NextPage } from 'next'
import { useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const session = useSession()

  return (
    <>
      {session.status === 'unauthenticated' && <Landing />}
      {session.status === 'authenticated' && (
        <>
          <Feed />
        </>
      )}
    </>
  )
}

export default Home
