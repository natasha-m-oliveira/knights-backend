import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateKnightNicknameBody {
  @IsNotEmpty()
  @IsString()
  nickname: string;
}
