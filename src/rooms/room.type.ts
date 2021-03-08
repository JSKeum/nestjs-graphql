import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Room')
export class RoomType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}
