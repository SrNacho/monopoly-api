import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardGateway } from './board.gateway';

@Module({
  providers: [BoardGateway, BoardService],
})
export class BoardModule {}
