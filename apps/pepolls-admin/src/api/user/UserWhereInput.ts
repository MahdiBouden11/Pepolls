import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "./UserListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type UserWhereInput = {
  birthdate?: DateTimeNullableFilter;
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  friends?: UserListRelationFilter;
  friendsList?: UserListRelationFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  lastName?: StringNullableFilter;
  posts?: PostListRelationFilter;
  sharedPosts?: PostListRelationFilter;
  username?: StringFilter;
};
