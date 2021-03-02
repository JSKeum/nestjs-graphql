import { RoomStatus } from '../rooms.model';

export class GetRoomsFilterDto {
  status: RoomStatus;
  search: string;
}
