import { type NextPage } from "next";
import { useState } from "react";
import { api } from "@/utils/api";

const Home: NextPage = () => {
  const [postContent, setPostContent] = useState('')
  const utils = api.useContext()
  const { data: posts } = api.post.getAll.useQuery()
  const { mutate: createPost } = api.post.create.useMutation({
    onSuccess() {
      utils.post.getAll.invalidate()
    },
  })
  return (
    <>
      <input value={postContent} onChange={(e) => setPostContent(e.target.value)} />
      <button onClick={() => createPost({ postContent })}>Post</button>
      {posts && posts.map((post) => (
        <div key={post.id}>
          <h1>{post.text}</h1>
        </div>
      ))}
    </>
  );
};

export default Home;
