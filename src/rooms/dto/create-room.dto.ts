import { IsEnum, Length } from 'class-validator';
import { RoomStatus } from '../rooms.model';

export class CreateRoomDto {
  @Length(1, 20)
  name: string;

  @Length(0, 200)
  description: string;

  @IsEnum(RoomStatus)
  status: RoomStatus;
}
