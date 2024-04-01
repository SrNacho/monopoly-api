import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { PlaceBuilder } from './place.builder';
import { AvailablePlaces } from 'src/constants/places.enum';

@Injectable()
export class BoardService {
  rollDices(): [a: number, b: number] {
    return [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)];
  }
}
