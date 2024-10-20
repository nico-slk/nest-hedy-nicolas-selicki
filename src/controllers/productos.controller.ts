import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('productos')
export class ProductosController {
  @Get()
  getAll() {
    return 'Obteniendo todos los productos';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `Obteniendo el producto con ID: ${id}`;
  }

  @Post()
  create(@Body() createProductoDto: any) {
    return 'Producto creado';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: any) {
    return `Actualizando el producto con ID: ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Eliminando el producto con ID: ${id}`;
  }
}
