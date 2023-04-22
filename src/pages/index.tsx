import Feed from '@/components/feed'
import Landing from '@/components/landing'
import { type NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const Home: NextPage = () => {
  const session = useSession()

  if (session.status === 'unauthenticated') {
    return <Landing />
  }

  return (
    <div className="grid grid-cols-12 justify-items-center">
      <aside className="col-start-1 col-end-4 p-5 w-10/12 rounded-md">
        <div className="flex flex-col gap-10 items-center p-5 bg-black3">
          <Image
            src={session?.data?.user?.image as string}
            alt="profile_pic"
            height={120}
            width={120}
            className="flex-none rounded-full ring-2 ring-offset-2 ring-primary ring-offset-black3"
          />
          <button
            onClick={() => signOut()}
            className="py-2 px-4 w-full rounded-md outline-none hover:border focus:ring-1 bg-black1 text-white-text hover:border-primary hover:bg-black1/70 focus:ring-primary"
          >
            Sign Out
          </button>
        </div>
      </aside>
      <Feed />
    </div>
  )
}

export default Home
