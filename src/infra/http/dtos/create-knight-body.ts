import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Attribute } from '@app/entities/weapon';

class Weapon {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  mod: number;

  @IsNotEmpty()
  @IsEnum(Attribute)
  attr: Attribute;

  @IsNotEmpty()
  @IsBoolean()
  equipped: boolean;
}

class Attributes {
  @IsOptional()
  @IsNumber()
  strength: number = 0;

  @IsOptional()
  @IsNumber()
  dexterity: number = 0;

  @IsOptional()
  @IsNumber()
  constitution: number = 0;

  @IsOptional()
  @IsNumber()
  intelligence: number = 0;

  @IsOptional()
  @IsNumber()
  wisdom: number = 0;

  @IsOptional()
  @IsNumber()
  charisma: number = 0;
}

export class CreateKnightBody {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  birthday: Date;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Weapon)
  weapons: Weapon[];

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => Attributes)
  attributes: Attributes;

  @IsNotEmpty()
  @IsEnum(Attribute)
  keyAttribute: Attribute;
}
