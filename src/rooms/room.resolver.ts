import { Resolver, Query } from '@nestjs/graphql';
import { RoomType } from './room.type';

@Resolver((of) => RoomType)
export class RoomResolver {
  @Query((returns) => RoomType)
  room() {
    return {
      id: '123123adf',
      name: '쉐어어스',
      description: 'asdad',
    };
  }
}
