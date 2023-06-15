import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  comments?: CommentUpdateManyWithoutPostsInput;
  dislikes?: number | null;
  likes?: number | null;
  sharingUsers?: UserWhereUniqueInput | null;
  topic?: string | null;
  user?: UserWhereUniqueInput | null;
};
