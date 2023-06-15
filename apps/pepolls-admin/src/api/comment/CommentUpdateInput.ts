import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  parentPost?: PostWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
