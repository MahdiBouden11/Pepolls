import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type Post = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  dislikes: number | null;
  id: string;
  likes: number | null;
  sharingUsers?: User | null;
  topic: string | null;
  updatedAt: Date;
  user?: User | null;
};
