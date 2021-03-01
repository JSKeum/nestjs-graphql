export interface Room {
  id: number;
  name: string;
  description: string;
  status: RoomStatus;
}

export enum RoomStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
