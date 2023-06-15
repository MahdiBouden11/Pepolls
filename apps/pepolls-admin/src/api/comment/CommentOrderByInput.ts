import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  parentPostId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
