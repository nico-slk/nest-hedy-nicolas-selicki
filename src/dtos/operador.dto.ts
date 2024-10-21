import { IsOptional, IsString } from 'class-validator';

export class CreateOperadorDTO {
  @IsString()
  readonly nombre: string;

  @IsString()
  readonly cargo: string;
}

export class UpdateOperadorDTO {
  @IsOptional()
  @IsString()
  readonly nombre?: string;

  @IsOptional()
  @IsString()
  readonly cargo?: string;
}
