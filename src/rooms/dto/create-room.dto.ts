import { RoomStatus } from '../rooms.model';

export class CreateRoomDto {
  name: string;
  description: string;
  status: RoomStatus;
}
