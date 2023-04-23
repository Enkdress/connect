import { api } from '@/utils/api'
import type { Post as PostType, User as UserType } from '@prisma/client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import type { FunctionComponent } from 'react'
import PostInput from './postInput'

const Post: FunctionComponent<{ post: PostType & { author: UserType } }> = ({
  post
}) => {
  return (
    <li key={post.id}>
      <div className="mx-5 flex items-start gap-2 rounded-md bg-black3 p-5 text-white">
        <Image
          src={post.author.image as string}
          alt="profile_pic"
          height={42}
          width={42}
          className="flex-none rounded-full ring-2 ring-primary ring-offset-2 ring-offset-black3"
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
  )
}

const Feed = () => {
  const session = useSession()
  const user = session.data?.user
  const { data: posts } = api.post.getAll.useQuery()

  if (!user) {
    return null
  }

  return (
    <main className="bg-dark-bg col-start-4 col-end-10 mx-auto flex h-full w-full max-w-4xl flex-col">
      <section
        id="posting_section"
        className="mx-5 mt-5 flex items-start gap-5 rounded-md bg-black3 p-5"
      >
        <Image
          src={user.image as string}
          alt="profile_pic"
          height={52}
          width={52}
          className="flex-none rounded-full ring-2 ring-primary ring-offset-2 ring-offset-black3"
        />
        <PostInput />
      </section>

      <section id="posts_section">
        {posts && posts.length > 0 ? (
          <ul className="mt-10 flex flex-col gap-5">
            {posts && posts.map(post => <Post post={post} key={post.id} />)}
          </ul>
        ) : (
          <h1 className="mx-5 my-10 rounded-md bg-black2 py-3 text-center text-xl text-white-text">
            Share something with us...
          </h1>
        )}
      </section>
    </main>
  )
}

export default Feed
