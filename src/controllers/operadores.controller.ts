import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('operadores')
export class OperadoresController {
  @Get()
  getAll() {
    return 'Obteniendo todos los operadores';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `Obteniendo el operador con ID: ${id}`;
  }

  @Post()
  create(@Body() createOperadorDto: any) {
    return 'Operador creado';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOperadorDto: any) {
    return `Actualizando el operador con ID: ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Eliminando el operador con ID: ${id}`;
  }
}
