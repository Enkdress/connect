import { api } from '@/utils/api'
import { Transition } from '@headlessui/react'
import { useState } from 'react'

const PostInput = () => {
  const [postContent, setPostContent] = useState('')

  const utils = api.useContext()
  const { mutate: createPost } = api.post.create.useMutation({
    onSuccess() {
      setPostContent('')
      utils.post.getAll.invalidate().catch(e => console.error(e))
    }
  })

  return (
    <div className="flex w-full flex-col gap-3 text-white-text">
      <input
        placeholder="Share something with the community"
        className="w-full rounded-md border-none bg-black2 p-4 text-white-text outline-none focus:ring-1 focus:ring-primary"
        value={postContent}
        onChange={({ target }) => setPostContent(target.value)}
      />
      <Transition
        show={postContent.length > 3}
        className="flex w-full justify-end"
        enter="transition duration-300 ease-out transform"
        enterFrom="-translate-y-10"
        enterTo="translate-y-0"
        leave="transition-opacity duration-150 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <button
          onClick={() => createPost({ postContent })}
          className="w-full rounded-md bg-primary px-4 py-2 text-black2 hover:bg-primary-hover md:w-52"
        >
          Share
        </button>
      </Transition>
    </div>
  )
}

export default PostInput
