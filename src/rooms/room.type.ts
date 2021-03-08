import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Room')
export class RoomType {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}
