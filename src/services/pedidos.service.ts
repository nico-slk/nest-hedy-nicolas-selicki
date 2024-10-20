import { Injectable } from '@nestjs/common';

@Injectable()
export class PedidosService {
  private pedidos = [];

  getAll() {
    return this.pedidos;
  }

  getOne(id: string) {
    return this.pedidos.find((pedido) => pedido.id === id);
  }

  create(createPedidoDto: any) {
    const nuevoPedido = { id: Date.now().toString(), ...createPedidoDto };
    this.pedidos.push(nuevoPedido);
    return nuevoPedido;
  }

  update(id: string, updatePedidoDto: any) {
    const index = this.pedidos.findIndex((pedido) => pedido.id === id);
    if (index > -1) {
      this.pedidos[index] = { ...this.pedidos[index], ...updatePedidoDto };
      return this.pedidos[index];
    }
    return null;
  }

  delete(id: string) {
    const index = this.pedidos.findIndex((pedido) => pedido.id === id);
    if (index > -1) {
      const deleted = this.pedidos.splice(index, 1);
      return deleted[0];
    }
    return null;
  }
}
