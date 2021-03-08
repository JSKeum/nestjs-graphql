import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Room {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
