import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoomType } from './room.type';
import { RoomServiceForGraphQL } from './rooms.service';
import { CreateRoomInput, GetRoomInput } from './room.input';

@Resolver((of) => RoomType)
export class RoomResolver {
  constructor(private roomService: RoomServiceForGraphQL) {}

  @Query((returns) => RoomType)
  getRoomById(@Args('getRoomInput') getRoomInput: GetRoomInput) {
    return this.roomService.getRoomById(getRoomInput);
  }

  @Mutation((returns) => RoomType)
  createRoom(@Args('createRoomInput') createRoomInput: CreateRoomInput) {
    return this.roomService.createRoom(createRoomInput);
  }
}
