import { Module } from '@nestjs/common';
import { RoomsModule } from './rooms/rooms.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './rooms/room.entitiy';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/keum',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Room],
    }),
    RoomsModule,
    GraphQLModule.forRoot({ autoSchemaFile: true }),
  ],
})
export class AppModule {}
