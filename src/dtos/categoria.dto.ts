import { IsOptional, IsString } from 'class-validator';

export class CreateCategoriaDTO {
  @IsString()
  readonly nombre: string;

  @IsOptional()
  @IsString()
  readonly descripcion?: string;
}

export class UpdateCategoriaDTO {
  @IsOptional()
  @IsString()
  readonly nombre?: string;

  @IsOptional()
  @IsString()
  readonly descripcion?: string;
}
