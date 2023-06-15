import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  sharingUsers?: UserWhereUniqueInput | null;
  topic?: string | null;
  user?: UserWhereUniqueInput | null;
};
