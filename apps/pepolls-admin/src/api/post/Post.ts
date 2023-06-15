import { User } from "../user/User";

export type Post = {
  createdAt: Date;
  id: string;
  sharingUsers?: User | null;
  topic: string | null;
  updatedAt: Date;
  user?: User | null;
};
