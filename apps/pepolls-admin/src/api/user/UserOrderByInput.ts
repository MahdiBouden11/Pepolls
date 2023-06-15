import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  birthdate?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
