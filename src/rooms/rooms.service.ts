import { Injectable, NotFoundException } from '@nestjs/common';
import { Room, RoomStatus } from './rooms.model';
import { CreateRoomDto } from './dto/create-room.dto';
import { GetRoomsFilterDto } from './dto/get-rooms-filter.dto';

@Injectable()
export class RoomsService {
  private rooms: Room[] = [];

  getAllRooms(): Room[] {
    return this.rooms;
  }

  getRoomById(id: number): Room {
    const room = this.rooms.find((room) => room.id === id);

    if (!room) {
      throw new NotFoundException(`Room id ${id} not found`);
    }

    return room;
  }

  getRoomsWithFilters(getRoomsFilterDto: GetRoomsFilterDto): Room[] {
    const { status, search } = getRoomsFilterDto;

    if (status) {
      return this.rooms.filter((room) => room.status === status);
    }

    if (search) {
      return this.rooms.filter(
        (room) =>
          room.name.includes(search) || room.description.includes(search),
      );
    }

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

  deleteRoom(id: number): Room[] {
    this.rooms = this.rooms.filter((room) => room.id !== id);
    return this.rooms;
  }

  updateRoomStatus(id: number, status: RoomStatus) {
    const room = this.getRoomById(id);
    room.status = status;

    return room;
  }
}
