import { UserUpdateManyWithoutUsersInput } from "./UserUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  birthdate?: Date | null;
  email?: string | null;
  firstName?: string | null;
  friends?: UserUpdateManyWithoutUsersInput;
  friendsList?: UserUpdateManyWithoutUsersInput;
  gender?: string | null;
  image?: string | null;
  lastName?: string | null;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  sharedPosts?: PostUpdateManyWithoutUsersInput;
  username?: string;
};
