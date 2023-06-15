import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  dislikes?: number | null;
  likes?: number | null;
  sharingUsers?: UserWhereUniqueInput | null;
  topic?: string | null;
  user?: UserWhereUniqueInput | null;
};
