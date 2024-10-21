import { Injectable } from '@nestjs/common';
import {
  CreateFabricanteDTO,
  UpdateFabricanteDTO,
} from 'src/dtos/fabricante.dto';

@Injectable()
export class FabricantesService {
  private fabricantes = [];

  getAll() {
    return this.fabricantes;
  }

  getOne(id: string) {
    return this.fabricantes.find((fabricante) => fabricante.id === id);
  }

  create(createFabricanteDto: CreateFabricanteDTO) {
    const nuevoFabricante = {
      id: Date.now().toString(),
      ...createFabricanteDto,
    };
    this.fabricantes.push(nuevoFabricante);
    return nuevoFabricante;
  }

  update(id: string, updateFabricanteDto: UpdateFabricanteDTO) {
    const index = this.fabricantes.findIndex(
      (fabricante) => fabricante.id === id,
    );
    if (index > -1) {
      this.fabricantes[index] = {
        ...this.fabricantes[index],
        ...updateFabricanteDto,
      };
      return this.fabricantes[index];
    }
    return null;
  }

  delete(id: string) {
    const index = this.fabricantes.findIndex(
      (fabricante) => fabricante.id === id,
    );
    if (index > -1) {
      const deleted = this.fabricantes.splice(index, 1);
      return deleted[0];
    }
    return null;
  }
}
