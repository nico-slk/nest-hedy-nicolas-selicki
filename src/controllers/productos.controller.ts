import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductosService } from 'src/services/productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private productosService: ProductosService) {}

  @Get()
  getAll() {
    return this.productosService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productosService.getOne(id);
  }

  @Post()
  create(@Body() createProductoDto: any) {
    return this.productosService.create(createProductoDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: any) {
    return this.productosService.update(id, updateProductoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productosService.delete(id);
  }
}
