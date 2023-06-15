import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  sharingUsers?: UserWhereUniqueInput | null;
  topic?: string | null;
  user?: UserWhereUniqueInput | null;
};
