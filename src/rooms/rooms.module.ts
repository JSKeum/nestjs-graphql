import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService, RoomServiceForGraphQL } from './rooms.service';
import { RoomResolver } from './room.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './room.entitiy';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  controllers: [RoomsController],
  providers: [RoomsService, RoomServiceForGraphQL, RoomResolver],
})
export class RoomsModule {}
