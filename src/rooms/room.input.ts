import { Field, InputType } from '@nestjs/graphql';
import { MinLength, IsOptional, IsMongoId } from 'class-validator';

@InputType()
export class CreateRoomInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsOptional()
  @Field()
  description: string;
}

@InputType()
export class GetRoomInput {
  @IsMongoId()
  @Field()
  id: string;
}
