import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  createdAt?: SortOrder;
  dislikes?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  sharingUsersId?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
