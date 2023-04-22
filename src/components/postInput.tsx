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
    <div className="flex flex-col gap-3 w-full text-white-text">
      <input
        placeholder="Share something with the community"
        className="p-4 w-full rounded-md border-none outline-none focus:ring-1 bg-black2 text-white-text focus:ring-primary"
        value={postContent}
        onChange={({ target }) => setPostContent(target.value)}
      />
      <Transition
        show={postContent.length > 3}
        className="flex justify-end w-full"
        enter="transition duration-300 ease-out transform"
        enterFrom="-translate-y-10"
        enterTo="translate-y-0"
        leave="transition-opacity duration-150 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <button
          onClick={() => createPost({ postContent })}
          className="py-2 px-4 w-full rounded-md md:w-52 bg-primary text-black2 hover:bg-primary-hover"
        >
          Share
        </button>
      </Transition>
    </div>
  )
}

export default PostInput
