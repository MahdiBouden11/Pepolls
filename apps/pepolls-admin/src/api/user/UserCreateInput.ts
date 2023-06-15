import { UserCreateNestedManyWithoutUsersInput } from "./UserCreateNestedManyWithoutUsersInput";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  birthdate?: Date | null;
  email?: string | null;
  firstName?: string | null;
  friends?: UserCreateNestedManyWithoutUsersInput;
  friendsList?: UserCreateNestedManyWithoutUsersInput;
  gender?: string | null;
  image?: string | null;
  lastName?: string | null;
  password: string;
  posts?: PostCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  sharedPosts?: PostCreateNestedManyWithoutUsersInput;
  username: string;
};
