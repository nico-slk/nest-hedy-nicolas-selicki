import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PedidosService } from 'src/services/pedidos.service';

@Controller('pedidos')
export class PedidosController {
  constructor(private pedidoService: PedidosService) {}

  @Get()
  getAll() {
    return this.pedidoService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.pedidoService.getOne(id);
  }

  @Post()
  create(@Body() createPedidoDto: any) {
    return this.pedidoService.create(createPedidoDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePedidoDto: any) {
    return this.pedidoService.update(id, updatePedidoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.pedidoService.delete(id);
  }
}
