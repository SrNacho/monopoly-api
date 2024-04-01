import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Server } from 'socket.io';

@WebSocketGateway({ namespace: 'board' })
export class BoardGateway {
  constructor(private readonly boardService: BoardService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('roll-dices')
  rollDices() {
    this.server.emit('dice-rolled', this.boardService.rollDices());
  }

  @SubscribeMessage('purchase')
  purchase() {
    this.server.emit('dice-rolled', this.boardService.rollDices());
  }
}
