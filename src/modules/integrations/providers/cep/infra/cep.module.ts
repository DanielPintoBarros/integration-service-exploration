import { Module } from '@nestjs/common';
import { GetAddressAction } from '../actions/get-address.action';
import { CepService } from '../cep.service';
import { CepClient } from './cep.client';

@Module({
  imports: [],
  providers: [
    GetAddressAction,
    CepClient,
    {
      provide: CepService,
      useFactory: (getAddressAction: GetAddressAction) => {
        return new CepService([getAddressAction]);
      },
      inject: [GetAddressAction],
    },
  ],
  exports: [CepService],
})
export class CepModule {}
