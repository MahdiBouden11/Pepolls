import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PostWhereInput = {
  comments?: CommentListRelationFilter;
  dislikes?: IntNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  sharingUsers?: UserWhereUniqueInput;
  topic?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
