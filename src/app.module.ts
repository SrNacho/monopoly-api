import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [BoardModule, GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
