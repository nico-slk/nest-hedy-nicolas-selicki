import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FabricantesService } from 'src/services/fabricantes.service';

@Controller('fabricantes')
export class FabricantesController {
  constructor(private fabricanteService: FabricantesService) {}

  @Get()
  getAll() {
    return this.fabricanteService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.fabricanteService.getOne(id);
  }

  @Post()
  create(@Body() createFabricanteDto: any) {
    return this.fabricanteService.create(createFabricanteDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFabricanteDto: any) {
    return this.fabricanteService.update(id, updateFabricanteDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.fabricanteService.delete(id);
  }
}
