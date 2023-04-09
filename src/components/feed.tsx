import { api } from '@/utils/api'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import PostInput from './postInput'

const Feed = () => {
  const session = useSession()
  const user = session.data?.user
  const { data: posts } = api.post.getAll.useQuery()

  if (!user) {
    return null
  }

  return (
    <main className="mx-auto flex h-full max-w-4xl flex-col bg-blue-950 ring-1 ring-gray-300">
      <section
        id="posting_section"
        className="mt-5 flex items-start gap-5 px-5 py-2"
      >
        <Image
          src={user.image as string}
          alt="profile_pic"
          height={52}
          width={52}
          className="flex-none rounded-full"
        />
        <PostInput />
      </section>

      <section id="posts_section">
        <ul className="mt-10 flex flex-col">
          {posts &&
            posts.map(post => (
              <li key={post.id}>
                <div className="flex items-start gap-2 border-t border-gray-50 p-5 text-white">
                  <Image
                    src={post.author.image as string}
                    alt="profile_pic"
                    height={42}
                    width={42}
                    className="flex-none rounded-full"
                  />
                  <div className="flex-2 flex grow flex-col gap-1">
                    <span className="font-semibold">{post.author.name}</span>
                    <p className="font-light">{post.text}</p>
                  </div>
                  <p className="flex-none font-extralight">
                    {post.createdAt.toLocaleString().split(',')[0]}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </main>
  )
}

export default Feed
