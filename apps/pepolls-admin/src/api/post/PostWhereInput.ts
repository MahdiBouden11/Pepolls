import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  dislikes?: IntNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  sharingUsers?: UserWhereUniqueInput;
  topic?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
