import { signIn } from 'next-auth/react'
import Image from 'next/image'

const Landing = () => {
  return (
    <header className="bg-black2">
      <nav className="container flex justify-between py-5 px-5 mx-auto xl:px-38">
        <Image
          src="/logo_full_size.svg"
          alt="logo full size"
          width={220}
          height={220}
        />
        <button
          className="w-20 rounded-md bg-primary text-black1"
          onClick={() => void signIn()}
        >
          Sign in
        </button>
      </nav>
    </header>
  )
}

export default Landing
