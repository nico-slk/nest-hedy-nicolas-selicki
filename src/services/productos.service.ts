import { Injectable } from '@nestjs/common';
import { CreatePedidoDTO, UpdatePedidoDTO } from 'src/dtos/pedido.dto';

@Injectable()
export class ProductosService {
  private productos = [];

  getAll() {
    return this.productos;
  }

  getOne(id: string) {
    return this.productos.find((producto) => producto.id === id);
  }

  create(createProductoDto: CreatePedidoDTO) {
    const nuevoProducto = { id: Date.now().toString(), ...createProductoDto };
    this.productos.push(nuevoProducto);
    return nuevoProducto;
  }

  update(id: string, updateProductoDto: UpdatePedidoDTO) {
    const index = this.productos.findIndex((producto) => producto.id === id);
    if (index > -1) {
      this.productos[index] = {
        ...this.productos[index],
        ...updateProductoDto,
      };
      return this.productos[index];
    }
    return null;
  }

  delete(id: string) {
    const index = this.productos.findIndex((producto) => producto.id === id);
    if (index > -1) {
      const deleted = this.productos.splice(index, 1);
      return deleted[0];
    }
    return null;
  }
}
