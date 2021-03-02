import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Room, RoomStatus } from './rooms.model';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { GetRoomsFilterDto } from './dto/get-rooms-filter.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Get()
  getRooms(@Query() getRoomsFilterDto: GetRoomsFilterDto) {
    if (Object.keys(getRoomsFilterDto).length) {
      return this.roomsService.getRoomsWithFilters(getRoomsFilterDto);
    } else {
      return this.roomsService.getAllRooms();
    }
  }

  @Post()
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.createRoom(createRoomDto);
  }

  @Delete('/:id')
  deleteRoom(@Param('id') id: number) {
    return this.roomsService.deleteRoom(id);
  }

  @Patch('/:id/status')
  updateRoomStatus(
    @Param('id') id: number,
    @Body('status') status: RoomStatus,
  ) {
    return this.roomsService.updateRoomStatus(id, status);
  }
}
