import { api } from '@/utils/api'
import type { Post as PostType, User as UserType } from '@prisma/client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import PostInput from './postInput'

const Post: FunctionComponent<{ post: PostType & { author: UserType } }> = ({
  post
}) => {
  return (
    <li key={post.id}>
      <div className="flex gap-2 items-start p-5 mx-5 text-white rounded-md bg-black3">
        <Image
          src={post.author.image as string}
          alt="profile_pic"
          height={42}
          width={42}
          className="flex-none rounded-full ring-2 ring-offset-2 ring-primary ring-offset-black3"
        />
        <div className="flex flex-col gap-1 flex-2 grow">
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
    <main className="flex flex-col col-start-4 col-end-10 mx-auto w-full max-w-4xl h-full bg-dark-bg">
      <section
        id="posting_section"
        className="flex gap-5 items-start p-5 mx-5 mt-5 rounded-md bg-black3"
      >
        <Image
          src={user.image as string}
          alt="profile_pic"
          height={52}
          width={52}
          className="flex-none rounded-full ring-2 ring-offset-2 ring-primary ring-offset-black3"
        />
        <PostInput />
      </section>

      <section id="posts_section">
        {posts && posts.length > 0 ? (
          <ul className="flex flex-col gap-5 mt-10">
            {posts && posts.map(post => <Post post={post} key={post.id} />)}
          </ul>
        ) : (
          <h1 className="py-3 my-10 mx-5 text-xl text-center rounded-md bg-black2 text-white-text">
            Share something with us...
          </h1>
        )}
      </section>
    </main>
  )
}

export default Feed
