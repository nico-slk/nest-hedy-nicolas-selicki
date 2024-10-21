import { Injectable } from '@nestjs/common';
import { CreateOperadorDTO, UpdateOperadorDTO } from 'src/dtos/operador.dto';

@Injectable()
export class OperadoresService {
  private operadores = [];

  getAll() {
    return this.operadores;
  }

  getOne(id: string) {
    return this.operadores.find((operador) => operador.id === id);
  }

  create(createOperadorDto: CreateOperadorDTO) {
    const nuevoOperador = { id: Date.now().toString(), ...createOperadorDto };
    this.operadores.push(nuevoOperador);
    return nuevoOperador;
  }

  update(id: string, updateOperadorDto: UpdateOperadorDTO) {
    const index = this.operadores.findIndex((operador) => operador.id === id);
    if (index > -1) {
      this.operadores[index] = {
        ...this.operadores[index],
        ...updateOperadorDto,
      };
      return this.operadores[index];
    }
    return null;
  }

  delete(id: string) {
    const index = this.operadores.findIndex((operador) => operador.id === id);
    if (index > -1) {
      const deleted = this.operadores.splice(index, 1);
      return deleted[0];
    }
    return null;
  }
}
