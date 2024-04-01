import { User } from '../dto/user.dto';

export interface Room {
  code: string;
  users: User[];
  host: User;
}
