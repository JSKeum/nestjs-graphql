import { BadRequestException, PipeTransform } from '@nestjs/common';
import { RoomStatus } from '../rooms.model';

export class RoomStatusValidationPipe implements PipeTransform {
  private readonly allowedRoomStatuses = [
    RoomStatus.PRIVATE,
    RoomStatus.PUBLIC,
  ];

  transform(value: any) {
    value = value.toUpperCase();

    const validation = this.isStatusValidated(value);

    if (!validation) {
      throw new BadRequestException(
        `${value} is an invaild as room status; it should be public or private`,
      );
    }

    return value;
  }

  isStatusValidated(status: any) {
    const index = this.allowedRoomStatuses.indexOf(status);
    return index !== -1;
  }
}
