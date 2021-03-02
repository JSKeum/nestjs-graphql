import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RoomStatus } from './rooms.model';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { GetRoomsFilterDto } from './dto/get-rooms-filter.dto';
import { RoomStatusValidationPipe } from './pipes/room-status-validation.pipe';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Get()
  getRooms(@Query(ValidationPipe) getRoomsFilterDto: GetRoomsFilterDto) {
    if (Object.keys(getRoomsFilterDto).length) {
      return this.roomsService.getRoomsWithFilters(getRoomsFilterDto);
    } else {
      return this.roomsService.getAllRooms();
    }
  }

  @Get('/:id')
  getRoomById(@Param('id', ParseIntPipe) id: number) {
    return this.roomsService.getRoomById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.createRoom(createRoomDto);
  }

  @Delete('/:id')
  deleteRoom(@Param('id') id: number) {
    return this.roomsService.deleteRoom(id);
  }

  @Patch('/:id/status')
  updateRoomStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', RoomStatusValidationPipe) status: RoomStatus,
  ) {
    return this.roomsService.updateRoomStatus(id, status);
  }
}
