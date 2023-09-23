import api from "../http/api.ts";
import { IPost } from "../interfaces/app.interface.ts";
import { POSTS_URL } from "../http/endpoints.ts";

class PostService {
  async getPostById(postId: string){
    return await api.get<IPost>(`${POSTS_URL}/${postId}`)
  }

  async getPostsList(){
    return await api.get<IPost[]>(`${POSTS_URL}`)
  }
}

export default new PostService();
