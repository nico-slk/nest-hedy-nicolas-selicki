import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categorias')
export class CategoriasController {
  @Get()
  getAll() {
    // Lógica para obtener todas las categorías
    return 'Obteniendo todas las categorías';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    // Lógica para obtener una categoría por ID
    return `Obteniendo la categoría con ID: ${id}`;
  }

  @Post()
  create(@Body() createCategoriaDto: any) {
    // Lógica para crear una nueva categoría
    return 'Categoría creada';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDto: any) {
    // Lógica para actualizar una categoría por ID
    return `Actualizando la categoría con ID: ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    // Lógica para eliminar una categoría por ID
    return `Eliminando la categoría con ID: ${id}`;
  }
}
