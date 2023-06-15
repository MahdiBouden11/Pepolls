import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PostWhereInput = {
  id?: StringFilter;
  sharingUsers?: UserWhereUniqueInput;
  topic?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
