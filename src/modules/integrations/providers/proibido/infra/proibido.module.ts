import { Module } from '@nestjs/common';
import { ProibidoAction } from '../actions/proibido.action';
import { ProibidoService } from '../proibido.service';

@Module({
  imports: [],
  providers: [
    ProibidoAction,
    {
      provide: ProibidoService,
      useFactory: (proibido: ProibidoAction) => {
        return new ProibidoService([proibido]);
      },
      inject: [ProibidoAction],
    },
  ],
  exports: [ProibidoService],
})
export class ProibidoModule {}
