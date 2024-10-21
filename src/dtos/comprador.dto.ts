import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateCompradorDTO {
  @IsString()
  readonly nombre: string;

  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly telefono?: string;
}

export class UpdateCompradorDTO {
  @IsOptional()
  @IsString()
  readonly nombre?: string;

  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsString()
  readonly telefono?: string;
}
