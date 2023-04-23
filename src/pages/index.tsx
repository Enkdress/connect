import Feed from '@/components/feed'
import Landing, { Header } from '@/components/landing'
import { type NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const Home: NextPage = () => {
  const session = useSession()

  if (session.status === 'unauthenticated') {
    return <Landing />
  }

  return (
    <>
      <div className="sm:hidden">
        <Header />
      </div>
      <div className="grid grid-cols-12">
        <aside className="col-start-2 hidden rounded-md pt-5 sm:col-end-5 sm:inline md:col-end-4">
          <div className="flex flex-col items-center gap-10 bg-black3 p-5">
            <Image
              src={session?.data?.user?.image as string}
              alt="profile_pic"
              height={120}
              width={120}
              className="flex-none rounded-full ring-2 ring-primary ring-offset-2 ring-offset-black3"
            />
            <button
              onClick={() => void signOut()}
              className="w-full rounded-md bg-black1 px-4 py-2 text-white-text outline-none hover:border hover:border-primary hover:bg-black1/70 focus:ring-1 focus:ring-primary"
            >
              Sign Out
            </button>
          </div>
        </aside>
        <Feed />
      </div>
    </>
  )
}

export default Home
