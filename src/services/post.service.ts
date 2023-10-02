import api from "../http/api.ts";
import { IPost } from "../interfaces/app.interface.ts";
import { POSTS_URL } from "../http/endpoints.ts";

class PostService {
  async getPostById(postId: string){
    return await api.get<IPost>(`${POSTS_URL}/${postId}`)
  }

  async getPostsList(){
    return await api.get<IPost[]>(`${POSTS_URL}/?_start=0&_limit=20`)
  }

  async createPost(title: string, description: string, author: string) {
    return api.post(POSTS_URL, {
      title,
      body: description,
      author
    })

  }
}

export default new PostService();
