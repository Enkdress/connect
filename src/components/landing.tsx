import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

export const Header = () => {
  const session = useSession()
  const isAuthenticated = !!session.data?.user

  return (
    <header className="bg-black2">
      <nav className="xl:px-38 container mx-auto flex justify-between px-5 py-5">
        <Image
          src="/logo_full_size.svg"
          alt="logo full size"
          width={160}
          height={160}
        />
        {!isAuthenticated && (
          <button
            className="w-20 rounded-md bg-primary text-black1"
            onClick={() => void signIn()}
          >
            Sign in
          </button>
        )}
        {isAuthenticated && (
          <button
            className="w-20 rounded-md bg-primary text-black1"
            onClick={() => void signOut()}
          >
            Sign out
          </button>
        )}
      </nav>
    </header>
  )
}

const Landing = () => {
  return <Header />
}

export default Landing
