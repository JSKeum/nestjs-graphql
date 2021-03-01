import { Body, Controller, Get, Post } from '@nestjs/common';
import { Room, RoomStatus } from './rooms.model';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Get()
  getAllRooms(): Room[] {
    return this.roomsService.getAllRooms();
  }

  @Post()
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.createRoom(createRoomDto);
  }
}
