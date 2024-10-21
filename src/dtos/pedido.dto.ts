import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class CreatePedidoDTO {
  @IsDate()
  @Type(() => Date)
  readonly fecha: Date;

  @IsString()
  readonly comprador: string; // Referencia al ID del comprador

  @IsOptional()
  @IsString()
  readonly estado?: string;
}

export class UpdatePedidoDTO {
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  readonly fecha?: Date;

  @IsOptional()
  @IsString()
  readonly comprador?: string;

  @IsOptional()
  @IsString()
  readonly estado?: string;
}
