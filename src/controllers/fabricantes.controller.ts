import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('fabricantes')
export class FabricantesController {
  @Get()
  getAll() {
    return 'Obteniendo todos los fabricantes';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `Obteniendo el fabricante con ID: ${id}`;
  }

  @Post()
  create(@Body() createFabricanteDto: any) {
    return 'Fabricante creado';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFabricanteDto: any) {
    return `Actualizando el fabricante con ID: ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Eliminando el fabricante con ID: ${id}`;
  }
}
