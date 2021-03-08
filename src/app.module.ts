import { Module } from '@nestjs/common';
import { RoomsModule } from './rooms/rooms.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [RoomsModule, GraphQLModule.forRoot({ autoSchemaFile: true })],
})
export class AppModule {}
