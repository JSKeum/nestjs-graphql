import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoomType } from './room.type';
import { RoomServiceForGraphQL } from './rooms.service';

@Resolver((of) => RoomType)
export class RoomResolver {
  constructor(private roomService: RoomServiceForGraphQL) {}

  @Query((returns) => RoomType)
  getRoomById(@Args('id') _id: string) {
    return this.roomService.getRoomById(_id);
  }

  @Mutation((returns) => RoomType)
  createRoom(
    @Args('name') name: string,
    @Args('description') description: string,
  ) {
    return this.roomService.createRoom(name, description);
  }
}
