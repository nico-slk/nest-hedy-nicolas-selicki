import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductoDTO {
  @IsString()
  readonly nombre: string;

  @IsString()
  readonly categoria: string; // Referencia al ID de la categoría

  @IsString()
  readonly fabricante: string; // Referencia al ID del fabricante

  @IsNumber()
  readonly precio: number;
}

export class UpdateProductoDTO {
  @IsOptional()
  @IsString()
  readonly nombre?: string;

  @IsOptional()
  @IsString()
  readonly categoria?: string;

  @IsOptional()
  @IsString()
  readonly fabricante?: string;

  @IsOptional()
  @IsNumber()
  readonly precio?: number;
}
