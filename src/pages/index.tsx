import { type NextPage } from "next";
import { useState } from "react";
import { api } from "@/utils/api";
import { signOut, useSession } from "next-auth/react";
import Landing from "@/components/landing";

const Home: NextPage = () => {
  const [postContent, setPostContent] = useState('')
  const session = useSession()
  const utils = api.useContext()
  const { data: posts } = api.post.getAll.useQuery()
  const { mutate: createPost } = api.post.create.useMutation({
    onSuccess() {
      utils.post.getAll.invalidate().catch((e) => console.error(e))
    },
  })
  return (
    <>
      {session.status === "unauthenticated" && <Landing />}
      {session.status === "authenticated" && (
        <>
          <input value={postContent} onChange={(e) => setPostContent(e.target.value)} />
          <button onClick={() => createPost({ postContent })}>Post</button>
          {posts && posts.map((post) => (
            <div key={post.id}>
              <h1>{post.text}</h1>
            </div>
          ))}
          <button onClick={() => void signOut()}>Sign out</button>
        </>
      )}
    </>
  );
};

export default Home;
