import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { GameService } from './game.service';
import { Room } from './interfaces/room.interface';
import { User } from './dto/user.dto';

@WebSocketGateway({ namespace: 'game' })
export class GameGateway {
  private readonly rooms: Room[] = [
    {
      code: 'abcdef',
      users: [],
      host: {
        userId: '111',
        username: '111',
      },
    },
  ];
  constructor(private readonly gameService: GameService) {}

  @SubscribeMessage('join')
  create(@MessageBody() data: { roomId: string; user: User }) {
    const roomIndex = this.rooms.findIndex((x) => x.code === data.roomId);

    if (roomIndex === -1) return;
    // TODO El usuario se puede unir 1000000 veces a una misma partida xd
    this.rooms[roomIndex] = {
      ...this.rooms[roomIndex],
      users: [...this.rooms[roomIndex].users, data.user],
    };
  }
}
