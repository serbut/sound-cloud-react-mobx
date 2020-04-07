import { Kind } from '../enums';
import { UserShort } from './user';

export interface Comment {
  kind: Kind.Comment;
  id: number;
  created_at: string;
  user_id: number;
  track_id: number;
  timestamp: number;
  body: string;
  uri: string;
  user: UserShort;
}
