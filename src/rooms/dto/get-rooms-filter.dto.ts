import { IsEnum, IsOptional, IsNotEmpty } from 'class-validator';
import { RoomStatus } from '../rooms.model';

export class GetRoomsFilterDto {
  @IsOptional()
  @IsEnum(RoomStatus)
  status: RoomStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
