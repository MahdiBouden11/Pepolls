import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "topic";

export const PostTitle = (record: TPost): string => {
  return record.topic || String(record.id);
};
