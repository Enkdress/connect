import { signIn } from "next-auth/react"
import Image from "next/image"

const Landing = () => {
  return (
    <header className="bg-background">
      <nav className="flex container justify-between mx-auto py-5 px-5 xl:px-38">
        <Image src="/black_logo.svg" alt="logo full size" width={220} height={220} />
        <button className="bg-primary rounded-md w-20 text-white" onClick={() => void signIn()}>
          Sign in
        </button>
      </nav>
    </header>
  )
}

export default Landing
