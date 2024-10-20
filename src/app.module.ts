import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FabricantesController } from './controllers/fabricantes.controller';
import { CategoriasController } from './controllers/categorias.controller';
import { CompradoresController } from './controllers/compradores.controller';
import { OperadoresController } from './controllers/operadores.controller';
import { PedidosController } from './controllers/pedidos.controller';
import { ProductosController } from './controllers/productos.controller';

@Module({
  imports: [],
  controllers: [AppController, FabricantesController, CategoriasController, CompradoresController, OperadoresController, PedidosController, ProductosController],
  providers: [AppService],
})
export class AppModule {}
