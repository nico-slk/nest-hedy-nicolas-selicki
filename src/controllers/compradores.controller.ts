import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompradoresService } from 'src/services/compradores.service';

@Controller('compradores')
export class CompradoresController {
  constructor(private compradorService: CompradoresService) {}

  @Get()
  getAll() {
    return this.compradorService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.compradorService.getOne(id);
  }

  @Post()
  create(@Body() createCompradorDto: any) {
    return this.compradorService.create(createCompradorDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCompradorDto: any) {
    return this.compradorService.update(id, updateCompradorDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.compradorService.delete(id);
  }
}
