import { Post } from "../post/Post";
import { JsonValue } from "type-fest";

export type User = {
  birthdate: Date | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  friends?: Array<User>;
  friendsList?: Array<User>;
  gender: string | null;
  id: string;
  image: string | null;
  lastName: string | null;
  posts?: Array<Post>;
  roles: JsonValue;
  sharedPosts?: Array<Post>;
  updatedAt: Date;
  username: string;
};
