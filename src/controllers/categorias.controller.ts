import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriasService } from 'src/services/categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private categoriaService: CategoriasService) {}

  @Get()
  getAll() {
    return this.categoriaService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.categoriaService.getOne(id);
  }

  @Post()
  create(@Body() createCategoriaDto: any) {
    return this.categoriaService.create(createCategoriaDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDto: any) {
    return this.categoriaService.update(id, updateCategoriaDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.categoriaService.delete(id);
  }
}
