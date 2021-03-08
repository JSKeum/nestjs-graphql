import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { RoomResolver } from './room.resolver';

@Module({
  controllers: [RoomsController],
  providers: [RoomsService, RoomResolver],
})
export class RoomsModule {}
