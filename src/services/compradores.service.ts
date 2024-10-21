import { Injectable } from '@nestjs/common';
import { CreateCompradorDTO, UpdateCompradorDTO } from 'src/dtos/comprador.dto';

@Injectable()
export class CompradoresService {
  private compradores = [];

  getAll() {
    return this.compradores;
  }

  getOne(id: string) {
    return this.compradores.find((comprador) => comprador.id === id);
  }

  create(createCompradorDto: CreateCompradorDTO) {
    const nuevoComprador = { id: Date.now().toString(), ...createCompradorDto };
    this.compradores.push(nuevoComprador);
    return nuevoComprador;
  }

  update(id: string, updateCompradorDto: UpdateCompradorDTO) {
    const index = this.compradores.findIndex(
      (comprador) => comprador.id === id,
    );
    if (index > -1) {
      this.compradores[index] = {
        ...this.compradores[index],
        ...updateCompradorDto,
      };
      return this.compradores[index];
    }
    return null;
  }

  delete(id: string) {
    const index = this.compradores.findIndex(
      (comprador) => comprador.id === id,
    );
    if (index > -1) {
      const deleted = this.compradores.splice(index, 1);
      return deleted[0];
    }
    return null;
  }
}
