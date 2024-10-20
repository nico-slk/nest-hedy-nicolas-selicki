import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('compradores')
export class CompradoresController {
  @Get()
  getAll() {
    return 'Obteniendo todos los compradores';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `Obteniendo el comprador con ID: ${id}`;
  }

  @Post()
  create(@Body() createCompradorDto: any) {
    return 'Comprador creado';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCompradorDto: any) {
    return `Actualizando el comprador con ID: ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Eliminando el comprador con ID: ${id}`;
  }
}
