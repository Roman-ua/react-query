import { useState } from "react";
import usePosts from "../../hooks/usePosts.ts";

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const { createPost } = usePosts();

  const cleanFormHandler = () => {
    setTitle('')
    setAuthor('')
    setDescription('')
  }

  const { mutate } = createPost(cleanFormHandler)

  const submitHandler = () => {
    mutate({ title, description, author })
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
      <input
        type="text"
        value={author}
        placeholder="Description"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={submitHandler} className="listItem">Create Post</button>
    </div>
  )
}

export default CreatePost;
