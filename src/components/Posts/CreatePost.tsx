import { useState } from "react";
import usePosts from "../../hooks/usePosts.ts";

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { createPost } = usePosts();
  const { mutate } = createPost(setTitle, setDescription)

  const submitHandler = () => {
    mutate({ title, description })
  };

  return (
    <div className="formWrapper">
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={submitHandler} className="listItem">Create Post</button>
    </div>
  )
}

export default CreatePost;
