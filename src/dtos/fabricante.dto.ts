import { IsOptional, IsString } from 'class-validator';

export class CreateFabricanteDTO {
  @IsString()
  readonly nombre: string;

  @IsOptional()
  @IsString()
  readonly pais?: string;
}

export class UpdateFabricanteDTO {
  @IsOptional()
  @IsString()
  readonly nombre?: string;

  @IsOptional()
  @IsString()
  readonly pais?: string;
}
