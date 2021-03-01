import { Injectable } from '@nestjs/common';
import { Room, RoomStatus } from './rooms.model';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomsService {
  private rooms: Room[] = [];

  getAllRooms(): Room[] {
    return this.rooms;
  }

  createRoom(createRoomDto: CreateRoomDto): Room {
    const { name, description, status = RoomStatus.PUBLIC } = createRoomDto;

    const newRoom = {
      id: 1,
      name,
      description,
      status,
    };

    this.rooms.push(newRoom);
    return newRoom;
  }
}
