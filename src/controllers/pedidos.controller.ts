import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('pedidos')
export class PedidosController {
  @Get()
  getAll() {
    return 'Obteniendo todos los pedidos';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `Obteniendo el pedido con ID: ${id}`;
  }

  @Post()
  create(@Body() createPedidoDto: any) {
    return 'Pedido creado';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePedidoDto: any) {
    return `Actualizando el pedido con ID: ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Eliminando el pedido con ID: ${id}`;
  }
}
