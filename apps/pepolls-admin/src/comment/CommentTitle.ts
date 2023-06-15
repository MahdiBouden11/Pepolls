import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "content";

export const CommentTitle = (record: TComment): string => {
  return record.content || String(record.id);
};
