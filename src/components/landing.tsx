import { signIn } from 'next-auth/react'
import Image from 'next/image'

const Landing = () => {
  return (
    <header className="bg-background">
      <nav className="container flex justify-between py-5 px-5 mx-auto xl:px-38">
        <Image
          src="/black_logo.svg"
          alt="logo full size"
          width={220}
          height={220}
        />
        <button
          className="w-20 text-white rounded-md bg-primary"
          onClick={() => void signIn()}
        >
          Sign in
        </button>
      </nav>
    </header>
  )
}

export default Landing
