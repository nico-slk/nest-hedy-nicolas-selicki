import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OperadoresService } from 'src/services/operadores.service';

@Controller('operadores')
export class OperadoresController {
  constructor(private operadorService: OperadoresService) {}

  @Get()
  getAll() {
    return this.operadorService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.operadorService.getOne(id);
  }

  @Post()
  create(@Body() createOperadorDto: any) {
    return this.operadorService.create(createOperadorDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOperadorDto: any) {
    return this.operadorService.update(id, updateOperadorDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.operadorService.delete(id);
  }
}
