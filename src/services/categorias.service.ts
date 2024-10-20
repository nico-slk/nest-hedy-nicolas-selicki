import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriasService {
  private categorias = [];

  getAll() {
    return this.categorias;
  }

  getOne(id: string) {
    return this.categorias.find((categoria) => categoria.id === id);
  }

  create(createCategoriaDto: any) {
    const nuevaCategoria = { id: Date.now().toString(), ...createCategoriaDto };
    this.categorias.push(nuevaCategoria);
    return nuevaCategoria;
  }

  update(id: string, updateCategoriaDto: any) {
    const index = this.categorias.findIndex((categoria) => categoria.id === id);
    if (index > -1) {
      this.categorias[index] = {
        ...this.categorias[index],
        ...updateCategoriaDto,
      };
      return this.categorias[index];
    }
    return null;
  }

  delete(id: string) {
    const index = this.categorias.findIndex((categoria) => categoria.id === id);
    if (index > -1) {
      const deleted = this.categorias.splice(index, 1);
      return deleted[0];
    }
    return null;
  }
}
